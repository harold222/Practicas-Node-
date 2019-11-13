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

let getEmpelado = async(id) => {

    let empleadoDB = empleados.find(empleados => empleados.id === id);/* Para bucar en el arreglo */
    if( !empleadoDB ){/* Si no existe un empleado con el id dado*/
        throw new Error(`No existe el empledo con id ${id}`);
    }else{
        return empleadoDB;
    }
};

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);    
    if( !salarioDB ){/* Si no existe un empleado con el id dado*/
        throw new Error(`No existe un salario para el usuario ${empleado.nombre}`);
    }else{
        return{
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
};

let getInfo = async(id) => {
    let empleado = await getEmpelado(id);
    let resp = await getSalario(empleado);
    
    return `${resp.nombre} tiene un salario de ${resp.salario}`;
};

getInfo(3).then(mensaje => console.log(mensaje)).catch( err => console.log(err) );