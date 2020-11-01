// function sum(x: string, y: string): string {
//   return x + " " + y;
// }

// function sum(x: number, y: number): number {
//   return x + y;
// }

// var fullname = sum("Fatemeh", "Raoufi");

function fullname(x: string, y:string, c:string):string
function fullname(x: string,y: string):string
{
  return x+" "+y;
}


function totalLength3(x: string,y: string):number
function totalLength3(x: any[], y: any[]): number
function totalLength3(x: (string | any[]),y: (string| any[])):number{
  var total: number = x.length + y.length;

x.slice(0);

if(x instanceof Array)
{

}

if(x instanceof String)
{

}


  return total;
}

totalLength3("Fatemeh","Raoufi");
totalLength3(["Fatemeh","Sara","Mary"],["Raoufi","Rezaei","Keshmiry"]);

//.....................................

