const fs = require('fs');

console.log('Antes de leer el archivo');

fs.readFile('./input.txt', 'utf-8', function (err, text) {
    if (err) {
        throw new Error('No se puede leer el archivo');
    } else {
        console.log(text);
    }
});

console.log('Despues de leer el archivo');