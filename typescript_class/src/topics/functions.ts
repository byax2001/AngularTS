// Funciones
// NOTA: En tsconfig.json se encuentran las configuraciones de TypeScript que indican que tan estrico se quiere que sea el lenguaje
// de modo que se puede configurar para que sea igual a JavaScript o que sea muy estricto y se permitan menos errores
// por ejemplo en el caso de las funciones se puede configurar para que se indique el tipo de dato que se espera que retorne la función

console.log("Funciones:")
//Funcion Comun
function addNumbers(a: number, b: number): number {
    return a + b;
}
const result = addNumbers(2, 2);
console.log(result);

//Funcion Flecha
const addNumbers2 = (a: number, b: number): number => {
    return a + b;
}
const result2 = addNumbers2(2, 2);
console.log(result2);
//Funcion con un parametro opcional y uno por defecto
const addNumbers3 = (a: number,b: number  = 2, c?: number): number => {
    return a + b;
}
const result3 = addNumbers3(2);
console.log(result3);

// Otra forma de declarar funciones:
let funcion: Function;
funcion = function (a: number, b: number) {
    return a + b;
};
console.log(funcion(1, 2));

let funcion2: (a: number, b: number) => number;
funcion2 = function (a: number, b: number) {
    return a + b;
};
console.log(funcion2(1, 2));

//  Funciones con parametros de objetos
console.log("Funciones e Interfaces:")

interface Characater{
    nombre: string;
    hp: number;
    showHp: () => void; // Se define una función flecha que no retorna nada
}

function heal(character: Characater, healX: number): void {
    character.hp += healX;
}

const newCharacter: Characater = {
    nombre: 'Fernando',
    hp: 50,
    showHp() {
        console.log(this.hp);
    }
}

heal(newCharacter, 20);
newCharacter.showHp();

// Clases
console.log("Clases:")

interface Xmen {
    nombre: string;
    poder:string;
}
class Avenger {
    nombre: string;
    equipo: string;
    nombreReal: string;
    puedePelear: boolean;
    peleasGanadas: number;
    constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean, peleasGanadas: number) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
}
let antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang', true, 1);
console.log(antman);



// Funciones como parametros
console.log("Funciones como parametros:")

function enviarMision(xmen: Xmen) {
    console.log('Enviando a: ' + xmen.nombre);
}
function enviarCuartel(xmen: Xmen) {
    console.log('Enviando al cuartel: ' + xmen.nombre);
}
let wolverine2: Xmen = {
    nombre: 'Logan',
    poder: 'Regeneración'
};
enviarMision(wolverine2);
enviarCuartel(wolverine2);
// Clases con interfaces
class Mutante implements Xmen {
    nombre: string;
    poder: string;
    constructor(nombre: string, poder: string) {
        this.nombre = nombre;
        this.poder = poder;
    }
}
let wolverine3 = new Mutante('Logan', 'Regeneración');
console.log(wolverine3);



/*
// Decoradores
function consola(constructor: Function) {
    console.log(constructor);
}
@consola
class Villano {
    constructor(public nombre: string) {
    }
}

// Decoradores de fabrica
function imprimirConsola(imprimir: boolean): Function {
    if (imprimir) {
        return consola;
    } else {
        return null;
    }
}
@imprimirConsola(true)
class Villano2 {
    constructor(public nombre: string) {
    }
}
// Decoradores de métodos
function editable(esEditable: boolean): Function {
    return function (target: any, nombrePropiedad: string, descriptor: PropertyDescriptor) {
        if (!esEditable) {
            console.warn('No me harán cambiar de opinión');
        }
        descriptor.writable = esEditable;
    };
}
class Xmen2 {
    constructor(public nombre: string) {
    }
    @editable(false)
    imprimir() {
        console.log(this.nombre + ' - Wolverine');
    }
}
let wolverine4 = new Xmen2('Logan');
wolverine4.imprimir();
wolverine4.imprimir = function () {
    console.log('Hola mundo');
};
wolverine4.imprimir();
// Decoradores de propiedades
function editableProp(esEditable: boolean): Function {
    return function (target: any, nombrePropiedad: string): any {
        let descriptor: any = {
            writable: esEditable
        };
        return descriptor;
    };
}
class Xmen3 {
    @editableProp(false)
    public nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
}
let wolverine5 = new Xmen3('Logan');
wolverine5.nombre = 'Scott';
console.log(wolverine5);
// Decoradores de parámetros
function parametro(target: any, metodo: string, index: number) {
    console.log(target, metodo, index);
}
class Xmen4 {
    constructor(public nombre: string) {
    }
    imprimir(plan: boolean, @parametro mensaje: string): void {
        if (plan) {
            console.log(mensaje + ' ' + this.nombre);
        } else {
            console.log(this.nombre);
        }
    }
}
let wolverine6 = new Xmen4('Logan');
wolverine6.imprimir(true, 'Hola');
// Decoradores de métodos
function decoradorClass(target: any) {
    console.log(target);
}
function decorador(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(key);
    console.log(descriptor);
}
@decoradorClass
class MiSuperClase {
    @decorador
    miMetodo() {
    }
}
*/



export {}; // Permite que este archivo sea un módulo de TypeScript, esto no se realizara en un proyecto de Angular