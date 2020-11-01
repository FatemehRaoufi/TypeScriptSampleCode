//Union Types

function totalLength2(x: string | any[], y: string | any[]): number 
{
  var total: number = x.length + y.length;

  x.slice(0); // Reading Part of string or Array

  if (x instanceof Array) //If Array
  {
    x.push("Fatemeh Raoufi"); //Add value to Array
  }

  if (x instanceof String) //If String
  {
    x.substr(0); //Get the first Caracter
  }

  return total;
}

//any[] / string[]

var total = totalLength2("Fatemeh", "Raoufi");
var total1 = totalLength2([123,"Fatemeh"], "Raoufi");

console.log(total);
console.log(total1);

let fname = "Fatema"; // Controlled the name of variable and dont allow to define 2 Variable with the same name.
{ //in {} , we can define a variable with the same name with another vsriable in project.
  let fname = "Fatema";
  console.log(fname);
}

console.log(fname);
