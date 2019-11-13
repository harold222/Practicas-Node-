/* Las promesas me permoten ejecutar un proceso asincrono o no
    y despues que se resuelva me realize un trabajo deseado
 */

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

let getEmpelado = (id) => {
/* Resolve si la promesa se cumple sino reject */
    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find(empleados => empleados.id === id);/* Para bucar en el arreglo */
        if( !empleadoDB ){/* Si no existe un empleado con el id dado*/
            reject(`No existe el empledo con id ${id}`);
        }else{
            resolve(empleadoDB);
        }
    });

};

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);    
        if( !salarioDB ){/* Si no existe un empleado con el id dado*/
            reject(`No existe un salario para el usuario ${empleado.nombre}`);
        }else{
            resolve(({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            }));
        }
    });
    
};

// getEmpelado(3).then( empleados => {
//     console.log('Empleado de BD: ', empleados);
//     getSalario(empleados).then( salarios => {
//         console.log('Salario de BD: ', salarios);
//     },  err => console.log(err));/* Reject para manejar el error */
// }, err => console.log(err));/* Reject para manejar el error */

getEmpelado(1).then( empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}).catch( err => {/* Cuando se encuentra el error */
    console.log(err);
});

