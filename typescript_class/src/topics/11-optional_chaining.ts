export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia','Elizabeth'],
}

const returnChildrenNumber = ( passenger: Passenger ): number => {

    // ? y ! son operadores de typescript que permiten trabajar con propiedades opcionales de un objeto
    // ? permite que la propiedad sea opcional
    // al usar el operador ! se esta asumiendo que la propiedad siempre va a tener un valor
    // si no tiene un valor, se genera un error en tiempo de ejecución 
    // Al usar ? y || 0 se esta asignando un valor por defecto en caso de que la propiedad no tenga un valor
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}


returnChildrenNumber( passenger1 );