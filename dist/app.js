"use strict";
const userName = "Mac";
let age = 30;
age = 29;
var result;
function add(a, b) {
    result = a + b;
    return result;
}
console.log("From the add function " + add(5, 3));
if (age > 30) {
    let isOld = true;
    console.log(isOld);
}
const adding = (a, b) => {
    return a + b;
};
console.log("From the arrow function " + adding(3, 3));
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
const addingCont = (a, b = 1) => {
    return a + b;
};
console.log(`Adding with some default values ` + addingCont(1));
//# sourceMappingURL=app.js.map