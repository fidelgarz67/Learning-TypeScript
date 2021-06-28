//we could explicitly tell TS what the object should have as such
// const person: {
//   name: string;
//   age: number;
// } = {

//creating an enum type
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

//creating an any type
let favoriteSports: any[];
//pretty danger since this array can be anything (be explicit about your types)
favoriteSports = ["basketball", 5, "fooseball", true, Role.AUTHOR];

//OR we can let TS infer the object structure (properties)
const person = {
  //   //here we explicitly tell TS what the structure types are
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   tuple: [number, string];
  // } = {
  name: "Fidel Garcia",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  //this is an array of type string OR number (TUPLE)
  tuple: [2, "author"],
  role: Role.ADMIN,
};

//push is an exception that TS cannot catch (Bad for a tuple)
// person.role.push("admin");
// ERROR - since the index of 1 is a string and we tried to assign a number
// person.tuple[1] = 10;

//this will throw an error since role is a tuple (only 2 inputs)
//person.tuple = [0, "admin", "user"];

let favoriteActivites: string[];
// favoriteActivites = ["Sports", 5]; // error
favoriteActivites = ["Sports"];

//this will throw an error since TS infers that there is not nickname
//  in the person object
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //ERROR - map() cannot be done on strings
  //   console.log(hobby.map());
}

//testing the enum
if (person.role === Role.ADMIN) {
  console.log(`person role is: ${person.role}`);
}
