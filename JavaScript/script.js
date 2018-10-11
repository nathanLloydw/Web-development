
var n = 16;
var name = "bob";
var bool = true;
var booksOfTheBible = ['john','genesis','daniel','exodus'];
var god = {name: "God", age: 2018, magic: true};

n = n + 1;

console.log('hello'+' world');

n = ((n - 2) * 3) / 4;

if(n === 12)
{
 console.log("true"); 
}
else
{
  console.log("false");
}

function doSomethingDifficult(){
  return “ i have done the impossible!”;
}

var difficultStuff = doSomethingDifficult();

console.log(difficultStuff);

document.querySelector(‘body’).onClick = function() {
  // do something e.g alert
  console.log(“Click click!”);
};
