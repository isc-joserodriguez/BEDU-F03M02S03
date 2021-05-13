const { firstNPrimes } = require('prime-functions');

console.log('Antes');

setTimeout(function () {
    console.log('Hola Mundo');
}, 0)

firstNPrimes(500);

console.log('Después');