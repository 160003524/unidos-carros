const fs = require('fs')

// Funcion para generar un archivo. Recibe un Path y el contenido
const generarFile = async (path, contenido) => {
    if ( !fs.existsSync(path) ){
        await fs.writeFile(path, contenido, (err) => {
            if (err) throw err;
            console.log('Archivo creado');
        })
    } else {
        await fs.appendFile(path, contenido, function (err) {
            if (err) throw err;
            console.log('Información añadida');
        })
    }
}

module.exports = { generarFile }