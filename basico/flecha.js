let sumaFlecha = (a, b) => a+b;

let saludo = nombre => `Hola ${nombre}`;

let dead = {
    nombre: 'dead',
    apellido: 'oir',
    poder: 'Volar',
    getNombre(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

console.log(sumaFlecha(12,20));
console.log(saludo('harold'));
console.log(dead.getNombre());