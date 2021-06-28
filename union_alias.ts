//creating an alias for the input values
type isCombinable = number | string;
type ConversionDescriptor = "as-number" | "as-text"

//Using the Union Type
//here combine can now accept both numbers or strings
function combine(
  input1: isCombinable,
  input2: isCombinable,
  //Literal types
  //this way we ensure that resultType can only be as-number or as-text
  resultType: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  //conversion for as number output
  //   if (resultType === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }

  return result;
}

//this works since we are only using numbers
const combineAges = combine(54, 2, "as-number");
console.log(combineAges);

//how can we get this to work
const combineName = combine("Max", "Geller", "as-text");
console.log(combineName);

const combineStringAges = combine("54", "2", "as-number");
console.log(combineStringAges);
