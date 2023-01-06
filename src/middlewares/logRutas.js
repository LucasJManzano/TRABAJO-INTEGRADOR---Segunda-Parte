const fs = require('fs');

module.exports = (req,res, next) => {
    let rutaAccedida = 'La ruta accedida es: '+ req.originalUrl + '\n';
    fs.appendFileSync('../src/routesAccessed.txt',rutaAccedida)
    next();
}

