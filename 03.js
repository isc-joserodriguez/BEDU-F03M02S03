const saluda = (nombre, callback) => {
    const tiempo = Math.floor(Math.random() * 4);
    setTimeout(() => {
        console.log(`Hola, ${nombre}! (después de ${tiempo}s)`)
        if (callback) {
            callback();
        }
    }, tiempo * 1000);
}

saluda('Caro', () => {
    saluda('Mauricio', () => {
        saluda('Chava', () => {
            saluda('Jorge', () => {
                saluda('Paola', () => {
                    saluda('José', () => {
                        saluda('Carla')
                    });
                });
            });
        });
    });
});




