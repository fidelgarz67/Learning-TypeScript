const userName = "Mac";
//cannot be changeed since it is a const
//userName = "Jake";

let age = 30;
age = 29;

//var is considered a global variable in JS but in TS is
// treated like any other varaible w/ scoping
var result;
function add(a: number, b: number) {
  result = a + b;
  return result;
}

console.log("From the add function " + add(5, 3));

if (age > 30) {
  let isOld = true;
  console.log(isOld);
}
//console.log(isOld)

//Arrow Functions
const adding = (a: number, b: number) => {
  return a + b;
};
//const adding = (a: number, b: number) => a + b;
console.log("From the arrow function " + adding(3, 3));

//other arrow functions shorthand
const button = document.querySelector("button");
if (button) {
  //creates a function that will console the event object
  button.addEventListener("click", (event) => console.log(event));
}

//default parameter arguments
const addingCont = (a: number, b: number = 1) => {
  return a + b;
};
console.log(`Adding with some default values ` + addingCont(1));
