//Working with functions and return types
//function add(n1: number, n2: number): string {}  - return a string
function add(n1: number, n2: number) {
  return n1 + n2;
}

//this function has a 'void' return types
function printResult(num: number) {
  console.log(`Result is: ${num}`);
}

//Function callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(15, 2));

//functions as types
//similar to creating a function but here TS knows that combineValues
//can be any function that has 2 num. as the param. and will return a
//number therefore printResults cannot be assigned to it
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = 5; - ERROR since 5 is not a function
// combineValues = printResult; - ERROR not the right function details
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  //TS assumes that the return type is a number since we were
  //explicit in the cb declaration
  console.log(result);
});
