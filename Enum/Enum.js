var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 2] = "Male";
    Gender[Gender["Female"] = 5] = "Female";
})(Gender || (Gender = {}));
function register1(person) {
    console.log(person.name + " " + person.family);
}
var Info = {
    name: "Fatemeh",
    family: "Raoufi",
    age: 33,
    gender: Gender.Female
};
register1(Info);
var Days;
(function (Days) {
    Days[Days["Saturday"] = 1] = "Saturday";
    Days[Days["Sunday"] = 2] = "Sunday";
    Days[Days["Monday"] = 3] = "Monday";
    Days[Days["Thursday"] = 45] = "Thursday";
})(Days || (Days = {}));
console.log(Days[45]);
var Colors;
(function (Colors) {
    Colors["Red"] = "#43344";
    Colors["Green"] = "#334422";
    Colors["Yellow"] = "#F012554";
})(Colors || (Colors = {}));
console.log(Colors.Red);
function SayHello(type) {
    if (type == Gender.Male) {
        console.log("Hello Male");
    }
    else {
        console.log("Hello Female");
    }
}
console.log(SayHello(Gender.Female));
