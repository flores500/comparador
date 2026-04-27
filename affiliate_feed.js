/**
 * Ejemplo: Consumiendo Tarifas desde una Red de Afiliados
 * -------------------------------------------------------
 * Las redes de afiliación (como Awin o Tradedoubler) te dan un enlace
 * privado a un archivo (suele ser CSV o XML) llamado "Product Feed".
 * Es ahí donde la telefónica actualiza todas sus tarifas cada noche.
 *
 * Para ejecutar este script necesitas NodeJS:
 * 1. Abre este directorio en el terminal.
 * 2. Escribe: node affiliate_feed.js
 */

async function extraerDeAfiliados() {
    console.log('🔗 Conectando con la Red de Afiliados (Product Feed)...');

    // 1. Simulación de descarga del archivo de datos
    // Normalmente aquí harías una petición a la URL secreta que te da la red.
    // Ej: const response = await fetch('https://api.awin.com/export/productfeed?...');
    // const csvData = await response.text();
    
    console.log('⬇️  Descargando el catálogo de tarifas de hoy (archivo estructurado)...');

    // Aquí simulamos el texto de un CSV real entregado por telefónicas
    // a través de la plataforma de afiliados. Viene perfectamente ordenado y categorizado.
    const csvSimulado = `id_producto,operadora,nombre_tarifa,gigas,minutos,precio_mensual,url_contratacion
MOV001,"Movistar","Tarifa Ilimitada Total",9999,"Ilimitados",45.90,"https://track.afiliados.com/c/123?url=movistar"
O2002,"O2","Fibra + Móvil 100GB",100,"Ilimitados",35.00,"https://track.afiliados.com/c/123?url=o2"
SIM003,"Simyo","Solo Móvil 20GB",20,"Ilimitados",10.00,"https://track.afiliados.com/c/123?url=simyo"`;

    // 2. Procesar los datos (Leer el CSV y convertirlo en objeto de JavaScript)
    console.log('🔄 Leyendo y ordenando el archivo...\n');
    
    const lineas = csvSimulado.split('\n');
    const tarifas = [];

    // Empezamos en la línea 1 para saltar las cabeceras (la línea 0)
    for(let i = 1; i < lineas.length; i++) {
        // Expresión regular para separar por comas pero respetando las comillas
        const valores = lineas[i].match(/(?:\"([^\"]*)\")|([^\,]+)/g).map(v => v.replace(/^"|"$/g, ''));

        tarifas.push({
            id: valores[0],
            operadora: valores[1],
            nombre: valores[2],
            gigas: valores[3] === '9999' ? 'Ilimitados' : `${valores[3]} GB`,
            llamadas: valores[4],
            precio: `${valores[5]} €`,
            linkVenta: valores[6] // <-- ¡Este es tu enlace mágico de oro!
        });
    }

    console.log('✅ ¡Catálogo descargado y convertido a nuestro formato con éxito!\n');
    console.table(tarifas);

    console.log('\n👀 Fíjate en la columna "linkVenta".');
    console.log('Ese es el enlace que le pondríamos al botón azul de "Contratar" en nuestra web (tu index.html).');
    console.log('💰 Si el usuario hace clic ahí y compra la tarifa, la operadora lo detecta automáticamente y la red de afiliados te ingresa la comisión correspondiente.');
}

// Iniciamos la función simulada
extraerDeAfiliados();
