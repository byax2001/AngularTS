import './style.css'
// se esta importando un modulo  que es una agrupación de código que se puede reutilizar en otros archivos
import './topics/01-basicos' //Con solo importar el archivo se ejecuta el código que se vera en la consola
import './topics/02-objetos_arreglos_interfaces' //Con solo importar el archivo se ejecuta el código que se vera en la consola
import './topics/03-functions' //Con solo importar el archivo se ejecuta el código que se vera en la consola
import './topics/04-desestructuring_objects' //Con solo importar el archivo se ejecuta el código que se vera en la consola
import './topics/05-destructuring_arrays' //Con solo importar el archivo se ejecuta el código que se vera en la consola
import './topics/06-destructuring_functions' //Con solo importar el archivo se ejecuta el código que se vera en la consola
import './topics/08-clases' //Con solo importar el archivo se ejecuta el código que se vera en la consola
import './topics/09-genericos'
//import './topics/decoradores'
import './topics/11-optional_chaining'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `Hola Mundo`


