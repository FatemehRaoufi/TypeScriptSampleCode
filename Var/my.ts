{
    var firstName: string = "Fatemeh";
    var lastName: string = "Raoufi";
    var fullName:string = firstName + ' '+ lastName;

    console.log(fullName);
}
//......................................
var animal = {
    name: "Fido",
    species: "Dog",
    age:calculateAge(2010),
    speak: function(){
        console.log('Woof !');
        
    }
}
console.log(animal);
//................................................
function calculateAge(birthYear)
{
    return Date.now() - birthYear;
}


function totalLength(x,y)
{
    let total = x.length + y.length;
    return total;
}

console.log(animal.speak());

console.log(totalLength(10,20));
console.log(calculateAge(2015));
