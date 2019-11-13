setTimeout(() => {
    console.log('hola');
}, 2000);

let getUsuarioById = (id, callback) => {
    let user = {
        nombre: 'Harold',
        id/* Si la propiedad es igual obviamos eso */
    }

    if(id === 20) {
        callback(`El usuario con id ${id}, no existe`);
    }else{
        callback(null, user);
    }
};

getUsuarioById(2, (err, user) => {
    if(err){
        return console.log(err);
    }
    console.log('Usuario encontrado', user);
});

