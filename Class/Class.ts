class Person1 {

  static lastId: number = 1; // No need to create Instance
  constructor(name: string, family: string) {
    this.name = name;
    this.family = family;
  }

  name: string;
  family: string;

  FullName = function(): string {
    return this.name + " " + this.family;
  };

  static getNextId()
  {
    this.lastId+=1;
  }
}

function Register1(person: Person1) {
  console.log(person.name + " " + person.family);
}

var FullName1 = new Person("Fatemeh", "Raoufi");
console.log(FullName1.FullName());

// iman.name="Iman";
// iman.family = "Madaeny";
Register(FullName1);

var personVar = new Person1("Fatemeh", "Raoufi");
console.log(personVar.FullName());
console.log(Person1.lastId);
Person1.getNextId();

var personVar2 = new Person1("Sara","Rezaei");
console.log(personVar2.FullName());
console.log(Person1.lastId);
Person1.getNextId();

var personVar3 = new Person1("Mina","Alizadeh");
console.log(personVar3.FullName());
console.log(Person1.lastId);
Person1.getNextId();


