interface IPerson // only define structure
{
  name: string;
  family:string;
  age: number;
  email?: string;
}

function register(person: IPerson)
{
console.log(person.name+" "+person.family);

}

var FullName: IPerson={
  name:"Fatemeh",
  family:"Raoufi",
  age:33
}

register(FullName);

interface IPersonService{
  add(person:IPerson):IPerson;
  delete(person:IPerson):void;
  getAll():IPerson[];
  getById(personId: number):IPerson;
}

