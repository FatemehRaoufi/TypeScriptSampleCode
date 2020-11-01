interface IPerson {
  name: string;
  family: string;
  age: number;
  gender: Gender;
  email?: string;
}

enum Gender{
  Male = 2,
  Female = 5
}

function register1(person: IPerson) {
  console.log(person.name + " " + person.family);
}

var Info: IPerson = {
  name: "Fatemeh",
  family: "Raoufi",
  age: 33,
  gender:Gender.Female
};

register1(Info);

interface IPersonService {
  add(person: IPerson): IPerson;
  delete(person: IPerson): void;
  getAll(): IPerson[];
  getById(personId: number): IPerson;
}

enum Days {
  Saturday = 1,
  Sunday = 2,
  Monday = 3,
  Thursday = 45,
}

console.log(Days[45]);

enum Colors {
  Red = "#43344",
  Green = "#334422",
  Yellow = "#F012554",
}

console.log(Colors.Red);

function SayHello(type: Gender)
{
  if(type==Gender.Male)
  {
    console.log("Hello Male");
    
  }
  else{
    console.log("Hello Female");
  }
}

console.log(SayHello(Gender.Female));

