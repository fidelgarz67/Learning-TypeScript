//Here we dont know what the user Inpu will be
let userInput: unknown;
let userName: string;

//how is unknown different from the any
userInput = 5;
userInput = "Hello";
//userName = userInput; // ERROR - unknown is not garenteed to be a string
//There must be an added type check for the man. that we want to do
if (typeof userInput === "string") {
  userName = userInput;
}

//The never type
// b/c there is an error the code will end here, therefore
// this function will never return anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("Error occured", 500);
