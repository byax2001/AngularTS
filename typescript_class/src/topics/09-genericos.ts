//Genericos
//Los genericos son una forma de crear componentes reutilizables que pueden trabajar con diferentes tipos de datos.

console.log("Genericos:");
function echo<T>(arg: T): T { //La puede colocar cualqueir letra, pero por convención se coloca T
    return arg;
}
let a = echo<number>(1);
let b = echo<string>("Hola Mundo");
let c = echo<any>(true);
let d = echo("Hellow World")

console.log(a.toExponential(2));
console.log(b.charAt(2));
console.log(c);
console.log(d);

export {}; //Evita que se mezclen los archivos js generados por typescript