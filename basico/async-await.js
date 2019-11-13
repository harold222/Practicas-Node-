/* Async funcion asincrona */

let getNombre = async() => {
    throw new Error('No existes este nombre');
    return 'Harold';
};

let Obtener = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve('Harold');
        }, 2500);
    });
};

let saludo = async() => {
    let nombre = await Obtener(); /* Primero respondera esta tarea */
    return `Hola ${nombre}`;
};

// getNombre().then(name => {
//     console.log(name);
// }).catch( error => {
//     console.log(error);
// });

Obtener().then(name => {
    console.log(name);
}).catch( error => {
    console.log(error);
});

saludo().then(msm => {
    console.log(msm);
});

