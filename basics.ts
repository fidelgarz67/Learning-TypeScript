//here can tell TS what type n1 and n2 will be (n1:number)
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //to do type checking we could (in JS)
  // if (typeof n1 !== "number" || typeof n2 !== "number")
  //   throw new Error("Incorrect input!");
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

//this is wrong logically since
//JS will concatinate the string and the number
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

//we'll get an error since n1 isnt a number
add(number1, number2, printResult, resultPhrase);
