

// Arrays
// Es recomendable declarar los arrays como constantes para evitar que se modifiquen ademas de ser mas ligeros y limpios que los arrays declarados con let
let arreglo: string[] = [];
arreglo.push('Fernando');
let arreglo2: any[] = [];
arreglo2.push(1);
arreglo2.push('1');
arreglo2.push(false);

console.log("Arreglos:")
console.log(arreglo);
console.log(arreglo2);

// Objetos
let objeto: object = {};
objeto = { nombre: 'Fernando' };
let objeto2: object = {};
objeto2 = { nombre: 'Fernando', edad: 30 };

let spiderman = {
    nombre: 'Peter',
    edad: 20
};

// Interfaces
// Un problema con los objetos es que se pueden agregar atributos que no estan definidos en la declaración del objeto
// ademas de que no se puede definir el tipo de dato de los atributos del objeto por lo que se pueden agregar atributos con cualquier tipo de dato
// Para solucionar esto se pueden utilizar las interfaces que definen los atributos y el tipo de dato que estos deben tener
// las interfaces no tienen un valor en si mismas, solo definen la estructura de los objetos, equivalen a 0 lineas de código en JavaScript

console.log("Interfaces:")
interface Xmen {
    nombre: string;
    poder?: string; // El signo de interrogación indica que el atributo es opcional
}
let ciclope: Xmen = {
    nombre: 'Scott',
    poder: 'Rayos'
};
let wolverine: Xmen = {
    nombre: 'Logan'
};
console.log("Interface con todos los atributos:")
console.log(ciclope);
console.log("Interface con atributo opcional:")
console.log(wolverine);

// Interfaces con un parametro funcion
interface Characater{
    nombre: string;
    poder: string;
    getNombre(): string; // Se define una función que retorna un string
    showPoder: () => void; // Se define una función flecha que no retorna nada
}


export {}; // Permite que este archivo sea un módulo de TypeScript, esto no se realizara en un proyecto de Angular