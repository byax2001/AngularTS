// Decoradores
// Los decoradores son una característica experimental de TypeScript y se pueden habilitar en el archivo tsconfig.json.
function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}


//Lo que hace un decordaror es modificar la clase, en este caso se le agrega una nueva propiedad y se modifica una existente
//Parecido a la herencia, de modo que se le agregan nuevas propiedades a la clase que se esta decorando
//Asi es como funcionan varios apartados de Angular

@classDecorator
export class SuperClass {


    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo')
    }
}


console.log( SuperClass );

const myClass = new SuperClass();
console.log( myClass );