var todo : {name: string};
todo = {
  name: "Fatemeh Raoufi"
}

console.log(todo);


function totalLength4(x: {length: number},y: {length: number}):number{
  var total: number = x.length + y.length;
  return total;
}

var x ={
  length: 20
}
totalLength4(x,x);

function Login(login: {username: string,password: string}):void{
  console.log(login.username);
  console.log(login.password);
  
}
var login = {username:"Fatemeh Raoufi",password:"123456"};
Login(login);
