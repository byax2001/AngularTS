
console.log("Desestructuración de Objetos:")

interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details:Details;
}

interface Details{
    author:string;
    year:number;
}


//Para este tipo de variables con solo declararlas y asignarles el tipo, al presionar en Quick Fix se creara la estructura de la variable
// Por lo tanto se crearan los campos de la variable y se asignara el tipo de dato correspondiente por defecto
/*const audioPlayer0: AudioPlayer = {
}
const audioPlayer: AudioPlayer = {
    audioVolume: 0,
    songDuration: 0,
    song: "",
    details: undefined
}
*/
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 30,
    song: "Start and Moon",
    details: {
        author:"Tylor",
        year:2005
    }
}

const { audioVolume: audio, songDuration: duracion, song: sonido, details } = audioPlayer;
const { author, year } = details; // details es un objeto que contiene los atributos author y year y se creo al desestructurar la variable audioPlayer en la linea de arriba

console.log("Audio Volume:", audio);
console.log("Song Duration:", duracion);
console.log("Song:", sonido);
console.log("Author:", author);
console.log("Year:", year);