//we could explicitly tell TS what the object should have as such
// const person: {
//   name: string;
//   age: number;
// } = {

//OR we can let TS infer the object structure (properties)
const person: {
  //here we explicitly tell TS what the structure types are
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Fidel Garcia",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  //this is an array of type string OR number
  role: [2, "author"],
};

//push is an exception that TS cannot catch (Bad for a tuple)
// person.role.push("admin");
// ERROR - since the index of 1 is a string and we tried to assign a number
// person.role[1] = 10;

//this will throw an error since role is a tuple
// person.role = [0, "admin", "user"];

let favoriteActivites: string[];
// favoriteActivites = ["Sports", 5]; // error
favoriteActivites = ["Sports"];

//this will throw an error since TS infers that there is not nickname
//  in the person object
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map());  //ERROR - map() cannot be done on strings
}
