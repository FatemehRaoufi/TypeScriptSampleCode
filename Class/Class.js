var Person = /** @class */ (function () {
    function Person(name, family) {
        this.FullName = function () {
            return this.name + " " + this.family;
        };
        this.name = name;
        this.family = family;
    }
    return Person;
}());
function Register(person) {
    console.log(person.name + " " + person.family);
}
var FullName = new Person("Fatemeh", "Raoufi");
console.log(FullName.FullName());
// iman.name="Iman";
// iman.family = "Madaeny";
Register(FullName);
