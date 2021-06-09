const button = document.querySelector("button");
//with TS we are forced to be clear with our code
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

//TS assumes that num1 and num2 are 'any' type
//this needs to be changed
function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  //TS will give an error since it
  //doesnt know if there will be a value in the HTML
  console.log(add(+input1.value, +input2.value));
});
