
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
 console.log("true "+n); 
}
else
{
  console.log("false "+n);
}

function doSomethingDifficult()
{
  return "i have done the impossible.";
}
function multiply(num1,num2)
{
  return (num1*num2);
}

var difficultStuff = doSomethingDifficult();
console.log(difficultStuff);

var math = multiply(4,5);
console.log(math);

var myHTML = document.querySelector('html');
myHTML.onclick = function() { console.log("Click click!"); }

window.onload = function() 
{
  document.getElementById('img').addEventListener('click', function (e) 
  {
    var img = document.createElement('img');
    img.setAttribute('src', 'resources/icon2.png');
    e.target.appendChild(img);
  });
};



