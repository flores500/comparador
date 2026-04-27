/**
 * Ejemplo Básico de Web Scraping para Telefónicas
 * -----------------------------------------------
 * Este es un "bot" que entra a una página web y saca las tarifas ofertadas.
 * Utilizamos una herramienta mundialmente usada llamada "Puppeteer".
 *
 * Para ejecutar este script necesitas NodeJS y Puppeteer:
 * 1. Abre este directorio en el terminal.
 * 2. Escribe: npm init -y
 * 3. Escribe: npm install puppeteer
 * 4. Por último, lo enciendes: node scraper.js
 */

const puppeteer = require('puppeteer');

async function extraerTarifas() {
    console.log('🚀 Iniciando el bot rastreador...');
    
    // 1. Abrimos un navegador "fantasma" que el usuario no ve.
    // (Pon headless: false si quieres ver literalmente cómo Chrome se abre solo)
    const browser = await puppeteer.launch({ headless: true }); 
    const page = await browser.newPage();
    
    // 2. Nos disfrazamos de usuario normal para que la página no nos bloquee de inmediato.
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36');

    try {
        console.log('🌐 Conectando con la web de la operadora...');
        
        // Nos dirigimos a la web a trackear (A modo de ejemplo usamos una web inofensiva)
        await page.goto('https://example.com', { waitUntil: 'networkidle2' });

        console.log('🔍 Extrayendo el código HTML de las tarifas...');
        
        // 3. Este pedazo de código se inyecta y se ejecuta DENTRO de esa página web.
        // Aquí es donde le decimos a la IA/bot cómo encontrar los precios basándonos en el diseño de su web.
        /* 
        =================== CÓDIGO REAL DE EJEMPLO ===================
        const tarifas = await page.evaluate(() => {
            const resultados = [];
            // Buscamos todas las cajas de su página web que tengan las características
            const cards = document.querySelectorAll('.tarjeta-tarifa'); 
            
            cards.forEach(card => {
                // Buscamos el texto dentro de esa tarjeta que dice el precio o los gigas
                const nombreOperadora = 'MiOperadoraLoca';
                const precio = card.querySelector('.precio-final')?.innerText || '0€';
                const gigas = card.querySelector('.lista-gigas')?.innerText || '0GB';
                
                // Lo metemos limpio en nuestro listado
                resultados.push({ operadora: nombreOperadora, precio: precio, gigas: gigas });
            });
            
            return resultados;
        }); 
        ==============================================================
        */

        // Ya que example.com no tiene tarifas, simularemos el resultado del código de arriba:
        const tarifasExtraidas = [
            { operadora: 'EjemploTel', precio: '20€', gigas: 'Ilimitados', llamadas: 'Ilimitadas' },
            { operadora: 'EjemploTel', precio: '9,90€', gigas: '20GB', llamadas: '100min' }
        ];

        console.log('✅ ¡Tarifas detectadas y extraídas con éxito de las entrañas de la web!\n');
        console.table(tarifasExtraidas);

        console.log('\n💾 Siguiente paso invisible: Tu servidor enviaría estos datos JSON directamente a nuestro app.js para actualizar la base de datos de los usuarios :)');

    } catch (error) {
        console.error('❌ Error durante el rastreo:', error);
    } finally {
        // 4. Se cierra el navegador para no consumir memoria RAM
        await browser.close();
        console.log('🛑 Bot apagado. Hasta la próxima actualización automática.');
    }
}

// Iniciamos la función
extraerTarifas();
