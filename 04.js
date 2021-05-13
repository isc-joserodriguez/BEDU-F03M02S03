function saluda(nombre) {
    return new Promise(function (resolve, reject) {
        const tiempo = Math.floor(Math.random() * 3);
        setTimeout(function () {
            if (!tiempo) {
                reject();
            } else {
                console.log(`Hola, ${nombre}! (despúes de ${tiempo}s)`);
                resolve();
            }
        }, tiempo * 1000);
    });
}

saluda('Caro').then(function () {
    return saluda('Felipe');
}).then(function () {
    return saluda('Mauricio');
}).then(function () {
    return saluda('Chava');
}).then(function () {
    console.log('Terminando secuencia con éxito');
}).catch(function () {
    console.log('Alguno terminó con error!');
});

