
var n = 16;
var name = "bob";
var bool = true;
var booksOfTheBible = ['john','genesis','daniel','exodus'];
var god = {name: "God", age: 2018, magic: true};

n = n + 1;

document.write('hello'+' world');

n = ((n - 2) * 3) / 4;

if(n === 12)
{
 document.write("true"); 
}
else
{
  document.write("false");
}

function doSomethingDifficult(){
  return “I have done the impossible!”;
}

var difficultStuff = doSomethingDifficult();

document.write(difficultStuff);

document.querySelector(‘body’).onClick = function() {
  // do something e.g alert
  alert(“Click click!”);
};
