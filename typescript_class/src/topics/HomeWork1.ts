
interface Addres{
    calle: string; //si se coloca el cursor en una variable y se presiona F2 se puede cambiar el nombre de la variable en todas las instancias
    pais: string;
    ciudad: string;
}
interface SuperHero{
    name: string;
    age: number;
    address:Addres
    showAddress(): string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};