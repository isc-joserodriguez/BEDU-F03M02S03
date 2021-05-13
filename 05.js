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

async function main() {
    try {
        await saluda('Caro');
        await saluda('Felipe');
        await saluda('Mauricio');
        await saluda('Chava');
        console.log('Terminó con éxito');
    } catch (e) {
        console.log('Alguno terminó con error');
    }
}

main();