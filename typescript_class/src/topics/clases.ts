export class Person {
  /*
    public name:string;
    public age:number;
    constructor(name:string, age:number=0){ //El valor por defecto es 0 en la edad
        this.name=name;
        this.age=age;
    }
    */
  //Otra forma de declarar las propiedades de la clase
  constructor(
    public name: string, 
    public age: number = 0
) {}
}

const person1 = new Person("Juan", 30);
console.log(person1);
const person2 = new Person("Pedro");
console.log(person2);

// Herencia
export class Hero extends Person {
  constructor(realName: string, age: number = 0, public alterEgo: string) {
    //El realName y la edad se pasan al constructor de la clase padre que es Person
    super(realName, age);
  }

}
const hero1 = new Hero("Juan", 30, "Superman");
console.log(hero1);

//Composicion sobre herencia
export class Villain {
  constructor(
    public direction:string,
    public power: string,
    public person: Person
  ) {}
}

const villan = new Villain("Calle falsa 123", "Volar", person1);
console.log(villan);