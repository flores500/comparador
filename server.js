import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carga las variables protegidas del archivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Permite a tu frontend (app.js) comunicarse en local con este servidor
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Inicializa el Cerebro de Google con tu Clave Secreta
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'CLAVE_FALTANTE');

// Obligatorio: sin JWT_SECRET cualquiera podría firmar tokens. Fallar rápido en arranque.
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    console.error("❌ FATAL: JWT_SECRET no está definido. Configúralo en el dashboard de Render (o en .env local).");
    process.exit(1);
}

// Espera un tiempo en ms
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// Helper con fallback y reintento exponencial para errores 429/503
async function generateWithFallback(prompt) {
    const models = [
        'gemini-flash-latest',
        'gemini-flash-lite-latest',
        'gemini-2.0-flash-lite',
        'gemini-2.0-flash-001',
        'gemini-2.0-flash',
        'gemini-2.5-flash',
    ];
    let lastErr;
    for (const modelName of models) {
        // Cada modelo tiene hasta 3 intentos con backoff para 429/503
        for (let attempt = 1; attempt <= 3; attempt++) {
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent(prompt);
                console.log(`✅ Respuesta obtenida con modelo: ${modelName}`);
                return result.response.text().trim();
            } catch (err) {
                const retryable = err.status === 429 || err.status === 503;
                console.warn(`Modelo ${modelName} intento ${attempt} falló (${err.status || err.message})`);
                lastErr = err;
                if (retryable && attempt < 3) {
                    const delay = attempt * 2000; // 2s, 4s
                    console.log(`  ⏳ Esperando ${delay}ms antes de reintentar...`);
                    await sleep(delay);
                } else {
                    break; // Pasar al siguiente modelo
                }
            }
        }
    }
    throw lastErr;
}

// --- MOCK SERVICES FOR MVNE ARCHITECTURE ---
class KYCService {
    static async verifyIdentity(user) {
        console.log(`[KYC] Verificando identidad de ${user.fullname || user.email}...`);
        await sleep(1000); // Llamada HTTP simulada
        if (!user.dni || user.dni.trim() === '') {
            throw new Error("Verificación eKYC fallida: Es obligatorio aportar un DNI/NIE validado.");
        }
        console.log(`[KYC] DNI ${user.dni} válido. Identidad confirmada en el registro gubernamental.`);
        return { status: 'verified', score: 98 };
    }
}

class LegalSignatureService {
    static async requestSignature(user, planName) {
        console.log(`[SIGNATURE] Solicitando firma SEPA vía SMS OTP al teléfono ${user.phone || 'desconocido'} para contrato de ${planName}...`);
        await sleep(1500); // Simulando envío y espera del código
        if (!user.iban || user.iban.trim() === '') {
            throw new Error("Firma rechazada: No se ha aportado una cuenta bancaria (IBAN) para el mandato automático SEPA.");
        }
        const signatureId = "SIG-" + Math.random().toString(36).substr(2, 9).toUpperCase();
        console.log(`[SIGNATURE] Firma electrónica completada legalmente. ID Documento: ${signatureId}`);
        return { signatureId };
    }
}

class TelecomMVNE_API {
    static async createSubscription(user, planId, planName) {
        console.log(`[MVNE B2B] Conectando a nodo centralizado para solicitar portabilidad del número ${user.phone}...`);
        await sleep(2000); // Simulación de procesamiento de la red virtual
        if (!user.phone || user.phone.trim() === '') {
            throw new Error("Portabilidad fallida devuelta por SGDA: El cliente no indicó qué número portar.");
        }
        const iccid = "8934" + Math.floor(Math.random() * 1000000000000000).toString().padStart(15, '0');
        console.log(`[MVNE B2B] Portabilidad aceptada y programada en ventana nocturna. ICCID eSIM generado: ${iccid}`);
        return { status: 'success', iccid, activationDate: new Date().toISOString() };
    }
}

// Inicializa la Base de Datos Local
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) console.error("Error opening database:", err);
    else {
        // Para asegurar que los usuarios viejos no den error, podríamos hacer un ALTER TABLE,
        // pero lo más simple en este demo es recrear con IF NOT EXISTS, y en producción usar migraciones.
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE,
            password TEXT,
            fullname TEXT,
            dni TEXT,
            phone TEXT,
            address TEXT,
            iban TEXT,
            currentCompany TEXT,
            currentPrice TEXT,
            currentPlan TEXT,
            desiredFeatures TEXT
        )`);
        db.run(`CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId INTEGER,
            planId INTEGER,
            planName TEXT,
            planPrice REAL,
            status TEXT DEFAULT 'pending',
            createdAt TEXT,
            completedAt TEXT
        )`);
        console.log("💾 Base de datos SQLite conectada.");
    }
});

// --- HEALTH CHECK (para mantener caliente el servicio en Render free tier) ---
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// --- RUTA PRINCIPAL DE LA IA ---
app.post('/api/recommend', async (req, res) => {
    try {
        const { userMessage } = req.body;
        
        if (!userMessage) {
            return res.status(400).json({ error: "Falta el mensaje del usuario." });
        }

        // Estas son las tarifas maestras (simulando las que bajaremos de afiliados)
        const plans = [
            { id: 1, operator: "Movistar", dataText: "100 GB", price: 24.90 },
            { id: 2, operator: "O2", dataText: "50 GB", price: 15.00 },
            { id: 3, operator: "Simyo", dataText: "20 GB", price: 10.00 },
            { id: 4, operator: "Vodafone", dataText: "Ilimitados", price: 33.50 },
            { id: 5, operator: "Pepephone", dataText: "109 GB", price: 25.90 },
            { id: 6, operator: "Digi", dataText: "15 GB", price: 7.00 }
        ];

        // EL PROMPT MÁGICO
        const prompt = `
            Actúa como un experto asesor de telefonía móvil en España.
            El usuario te dice: "${userMessage}"
            
            Estas son las tarifas de las que dispones ahora mismo en formato JSON de datos limpios:
            ${JSON.stringify(plans, null, 2)}
            
            Analiza lo que pide el usuario y selecciona la tarifa que mejor encaja con él (por el límite de precio, por el exceso de gigas, o por la red).
            Responde ÚNICAMENTE con un objeto JSON puro (sin formato markdown ni \`\`\`json) que tenga esta estructura exacta para que la web lo pueda leer:
            {
              "recommendedId": [AQUÍ EL ID NUMÉRICO DE LA TARIFA GANADORA],
              "reason": "[Una corta frase tuya de 20 palabras de por qué se la recomiendas al usuario basada en sus requisitos]"
            }
        `;

        // Usamos el helper con fallback automático
        const responseText = await generateWithFallback(prompt);
        
        // Limpiamos los bloques de código si la IA se vuelve locuaz
        const cleanJsonText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
        const parsedResponse = JSON.parse(cleanJsonText);
        
        res.json(parsedResponse);
    } catch (error) {
        console.error("Error en la API de Gemini:", error);
        res.status(500).json({ error: "No se pudo conectar con la IA de Google. Inténtalo de nuevo." });
    }
});

// --- RUTA VERIFICAR TOKEN ---
app.get('/api/auth/verify', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ valid: false });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({ valid: true, email: decoded.email });
    } catch (err) {
        res.status(401).json({ valid: false });
    }
});

// --- RUTA PERFIL USUARIO ---
app.get('/api/profile', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ error: "No autorizado" });
    const token = authHeader.split(' ')[1];
    let decoded;
    try {
        decoded = jwt.verify(token, JWT_SECRET);
    } catch(err) {
        return res.status(401).json({ error: "Token inválido" });
    }
    db.get('SELECT email, fullname, dni, phone, address, iban, currentCompany, currentPrice, currentPlan, desiredFeatures FROM users WHERE id = ?', [decoded.id], (err, row) => {
        if (err || !row) return res.status(500).json({ error: "Error de perfil" });
        res.json(row);
    });
});

// --- ACTUALIZAR PERFIL ---
app.put('/api/profile', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ error: "No autorizado" });
    const token = authHeader.split(' ')[1];
    let decoded;
    try {
        decoded = jwt.verify(token, JWT_SECRET);
    } catch(err) {
        return res.status(401).json({ error: "Token inválido" });
    }

    const { fullname, dni, phone, address, iban, currentCompany, currentPrice, currentPlan, desiredFeatures } = req.body;
    const query = `UPDATE users SET
        fullname = ?, dni = ?, phone = ?, address = ?, iban = ?,
        currentCompany = ?, currentPrice = ?, currentPlan = ?, desiredFeatures = ?
        WHERE id = ?`;
    const params = [
        fullname || null, dni || null, phone || null, address || null, iban || null,
        currentCompany || null, currentPrice || null, currentPlan || null, desiredFeatures || null,
        decoded.id
    ];
    db.run(query, params, function(err) {
        if (err) return res.status(500).json({ error: "Error al actualizar perfil" });
        res.json({ message: "Perfil actualizado" });
    });
});

// --- RUTA MIS PEDIDOS ---
app.get('/api/my-orders', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ error: "No autorizado" });
    const token = authHeader.split(' ')[1];
    let decoded;
    try {
        decoded = jwt.verify(token, JWT_SECRET);
    } catch(err) {
        return res.status(401).json({ error: "Token inválido" });
    }
    db.all('SELECT * FROM orders WHERE userId = ? ORDER BY createdAt DESC', [decoded.id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Error fetch orders" });
        res.json(rows || []);
    });
});

// --- RUTA IA RECOMENDACIÓN INTELIGENTE (PERSONALIZADA) ---
app.post('/api/recommend-smart', async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "No autorizado" });
    }

    const token = authHeader.split(' ')[1];
    let decoded;
    try {
        decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return res.status(401).json({ error: "Token inválido o caducado" });
    }

    db.get('SELECT * FROM users WHERE email = ?', [decoded.email], async (err, row) => {
        if (err || !row) return res.status(500).json({ error: "Error de perfil" });

        const plans = [
            { id: 1, operator: "Movistar", dataText: "100 GB", price: 24.90 },
            { id: 2, operator: "O2", dataText: "50 GB", price: 15.00 },
            { id: 3, operator: "Simyo", dataText: "20 GB", price: 10.00 },
            { id: 4, operator: "Vodafone", dataText: "Ilimitados", price: 33.50 },
            { id: 5, operator: "Pepephone", dataText: "109 GB", price: 25.90 },
            { id: 6, operator: "Digi", dataText: "15 GB", price: 7.00 }
        ];

        const prompt = `Eres nuestro asesor experto. Tienes un cliente registrado con este perfil:
- Compañía actual: ${row.currentCompany || 'Desconocida'}
- Pago actual: ${row.currentPrice || 'No especificado'}€
- Tarifa actual: ${row.currentPlan || 'No especificada'}
- Deseos: ${row.desiredFeatures || 'Mejorar precio y datos'}

Analiza estas tarifas disponibles:
${JSON.stringify(plans, null, 2)}

Recomienda al menos 1 o 2 de las MEJORES opciones exactas para este cliente.
IMPORTANTE: Debes devolver tu respuesta EXCLUSIVAMENTE como un objeto JSON puro (sin la cabecera \`\`\`json). Debe tener el siguiente formato estricto:
{
  "recommendationText": "<p>Tú análisis persuasivo y personalizado aquí, detallando el ahorro. Usa HTML en línea y colores.</p>",
  "recommendedPlanIds": [ELIGE_IDS_NUMERICOS]
}
No devuelvas nada más fuera del JSON.`;

        try {
            const rawText = await generateWithFallback(prompt);
            const responseText = rawText.replace(/```json/gi, '').replace(/```html/gi, '').replace(/```/g, '').trim();
            const AIRes = JSON.parse(responseText);
            res.json(AIRes);
        } catch (callErr) {
            console.error(callErr);
            res.status(500).json({ error: "Error procesando IA. Inténtalo de nuevo." });
        }
    });
});

// --- RUTA COMPLEJO SIMULADOR MVNE DE CAMBIO DE TARIFA ---
app.post('/api/switch-plan', async (req, res) => {
    // Verificamos el token (Autenticación interna)
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ error: "No autorizado" });
    const token = authHeader.split(' ')[1];
    let decoded;
    try { decoded = jwt.verify(token, JWT_SECRET); } 
    catch (err) { return res.status(401).json({ error: "Token inválido o caducado" }); }

    const { planId, planName, planPrice } = req.body;
    
    // Extraemos todos los datos personales de SQLite para validarlos en los servicios
    db.get('SELECT * FROM users WHERE id = ?', [decoded.id], async (err, user) => {
        if (err || !user) return res.status(500).json({ error: "Usuario corrupto o no encontrado" });

        try {
            console.log(`\n\n⏳ [ORDER INITIATED] === INICIANDO PROCESO MVNE (Usuario SQL-ID: ${user.id}) ===`);
            
            // 1. Validar Identidad (Previene fraude)
            await KYCService.verifyIdentity(user);
            
            // 2. Firma del Contrato Digital SEPA (Permite cobrar al cliente)
            const sigResult = await LegalSignatureService.requestSignature(user, planName);
            
            // 3. Hablar con las Antenas Inteligentes B2B MVNE (Generar línea y portabilidad)
            const mvneResult = await TelecomMVNE_API.createSubscription(user, planId, planName);
            
            console.log(`✅ [ORDER COMPLETED] === PROCESO EN NODOS TELECOM FINALIZADO CON ÉXITO ===\n`);

            // 4. Guardar confirmación en base de datos
            const now = new Date().toISOString();
            const query = 'INSERT INTO orders (userId, planId, planName, planPrice, status, createdAt, completedAt) VALUES (?, ?, ?, ?, ?, ?, ?)';
            db.run(query, [user.id, planId, planName, planPrice, 'completed', now, now], function(err) {
                if (err) return res.status(500).json({ error: "Error de SQLite al guardar la confirmación del pedido" });
                
                res.json({
                    status: "success",
                    orderId: this.lastID,
                    iccid: mvneResult.iccid,
                    signatureId: sigResult.signatureId,
                    message: "Trámite B2B tramitado y portabilidad en proceso legal."
                });
            });

        } catch (apiError) {
            // Si el DNI era inválido, falló la firma o el nodo rechazó el teléfono:
            console.error(`❌ [ORDER ABORTED] Error devuelto por API externa: ${apiError.message}\n=== ABORTANDO ===\n`);
            return res.status(400).json({ error: apiError.message });
        }
    });
});

// --- AUTENTICACIÓN LOCAL EN BASE DE DATOS ---
app.post('/api/auth/register', async (req, res) => {
    const { email, password, fullname, dni, phone, address, iban, currentCompany, currentPrice, currentPlan, desiredFeatures } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email y contraseña son obligatorios" });

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (email, password, fullname, dni, phone, address, iban, currentCompany, currentPrice, currentPlan, desiredFeatures) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const params = [email, hashedPassword, fullname || null, dni || null, phone || null, address || null, iban || null, currentCompany || null, currentPrice || null, currentPlan || null, desiredFeatures || null];

        db.run(query, params, function(err) {
            if (err) {
                if (err.message.includes('UNIQUE')) return res.status(400).json({ error: "El email ya existe" });
                return res.status(500).json({ error: "Error en base de datos" });
            }
            res.json({ message: "Usuario registrado con éxito" });
        });
    } catch (e) {
        res.status(500).json({ error: "Error procesando registro" });
    }
});

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Faltan datos" });

    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
        if (err) return res.status(500).json({ error: "Error en base de datos" });
        if (!user) return res.status(401).json({ error: "Credenciales inválidas" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Credenciales inválidas" });

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
        res.json({ token, email: user.email });
    });
});

// Iniciamos la cocina
app.listen(port, () => {
    console.log(`🤖 La "Cocina" (Servidor) está ENCENDIDA en: http://localhost:${port}`);
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === '') {
        console.warn("⚠️ ALERTA: Aún no has puesto tu GEMINI_API_KEY en el archivo .env");
    }
});
