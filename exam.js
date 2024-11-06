function calcularPi(iteraciones) {
    let puntosDentroCirculo = 0;

    for (let i = 0; i < iteraciones; i++) {
        // Generamos coordenadas aleatorias entre -1 y 1
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;

        // Verificamos si el punto está dentro del círculo
        if (x * x + y * y <= 1) {
            puntosDentroCirculo++;
        }
    }

    // Calculamos la aproximación de PI
    const piAproximado = 4 * (puntosDentroCirculo / iteraciones);
    return piAproximado;
}

// Ejemplo: Aproximamos PI con 1,000,000 iteraciones
console.log(calcularPi(1000000));
