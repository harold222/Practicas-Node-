let empleados = [
    {
        id: 1,
        nombre: 'Harold'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Pedro'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 3000
    }
];

let getEmpelado = (id, callback) => {
    let empleadoDB = empleados.find(empleados => empleados.id === id);/* Para bucar en el arreglo */
    if( !empleadoDB ){/* Si no existe un empleado con el id dado*/
        console.log(`No existe el empledo con id ${id}`);
    }else{
        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);    
    if( !salarioDB ){/* Si no existe un empleado con el id dado*/
        console.log(`No existe un salario para el usuario ${empleado.nombre}`);
    }else{
        callback(null, ({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }));
    }
    
};

getEmpelado(1, (err, empleado) => {
    if(err){
        return console.log(err);
    }

    getSalario(empleado, (err, salario) => {
        if(err){
            return console.log(err);
        }
        console.log(salario);
    });
});