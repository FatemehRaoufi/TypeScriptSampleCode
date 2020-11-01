var todo;
todo = {
    name: "Fatemeh Raoufi"
};
console.log(todo);
function totalLength4(x, y) {
    var total = x.length + y.length;
    return total;
}
var x = {
    length: 20
};
totalLength4(x, x);
function Login(login) {
    console.log(login.username);
    console.log(login.password);
}
var login = { username: "Fatemeh Raoufi", password: "123456" };
Login(login);
