// Formas de declarar variables en typescript
let nombre: string = 'Juan';
let edad: number = 30;
let casado: boolean = false;
let fecha: Date = new Date();
let cualquierCosa: any = 'Juan';
cualquierCosa = 30;
cualquierCosa = false;
let varTipoCambiable: string | number | boolean = 'Juan'; // Esta variable puede cambira el tipo de dato que almacena
varTipoCambiable = 30;

console.log("Variables Declaradas:")
console.log(nombre, edad, casado, fecha, cualquierCosa, varTipoCambiable);

// Tipos de variables
let nombre2: string;
let edad2: number;
let casado2: boolean;
let fecha2: Date;
let cualquierCosa2: any;
let spiderman = {  // Tipo de dato objeto
    nombre: 'Peter',
    edad: 20
};


export {}; // Permite que este archivo sea un módulo de TypeScript, esto no se realizara en un proyecto de Angular