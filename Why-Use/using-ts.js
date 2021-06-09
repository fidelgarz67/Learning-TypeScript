var button = document.querySelector("button");
//with TS we are forced to be clear with our code
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
//TS assumes that num1 and num2 are 'any' type
//this needs to be changed
function add(num1, num2) {
  return num1 + num2;
}
button.addEventListener("click", function () {
  //TS will give an error since it
  //doesnt know if there will be a value in the HTML
  console.log(add(+input1.value, +input2.value));
});
