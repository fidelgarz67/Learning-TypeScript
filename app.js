//we could explicitly tell TS what the object should have as such
// const person: {
//   name: string;
//   age: number;
// } = {
//OR we can let TS infer the object structure (properties)
var person = {
    name: "Fidel Garcia",
    age: 24,
    hobbies: ["Sports", "Cooking"],
    //this is an array of type string OR number
    role: [2, "author"]
};
//this is possible, however what if we want role to be a tuple
person.role.push("admin");
// ERROR - since the index of 1 is a string and we tried to assign a number
// person.role[1] = 10;
var favoriteActivites;
// favoriteActivites = ["Sports", 5]; // error
favoriteActivites = ["Sports"];
//this will throw an error since TS infers that there is not nickname
//  in the person object
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //   console.log(hobby.map());  //ERROR - map() cannot be done on strings
}
