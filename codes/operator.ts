let age=17;
let hasId= true;

console.log(age>=18 && hasId);// and operator 
console.log(age<=18 || hasId);//or operator
console.log(!hasId);// not operator

let isAdult:string = age>=18 ? "Yes" : "No"; // ternary operator
// console.log("Is the person an Adult : "+ isAdult);
console.log(`Is the person an adult : ${isAdult}`); // backtick format helps if there are multiple variables in a single line

let checkAdult = age === 17? "Valid" : "Invalid";
console.log(checkAdult);

//instaceOf operators - to check if the object belongs to the class or not

class Person{}
let p = new Person;
console.log(p instanceof Person);

//Nullish coalescing operator : returns right value only if left value is null or undefined or left value if right value is null or undefined 

let user = null;
let rs = user ?? "Guest";
console.log(rs);// Output guestg

let cl = 23;
let rs1 = cl ?? "Guest";
console.log(rs1);// output 23

//optional chaining operator: prevents error if object is null or undefined 

// usually the object is like : let user = { name="Keshav",  age=26}, but if it is null, user below approach
let user1: any = null;
console.log(user1?.name);


//spread operator : copy values, merge array, merge object

let fruits =["Apple", "Bannana"];
let allFruits = [...fruits, "Orange"];
console.log(allFruits);

let num1 = [1,2,3];
let num2 = [4,5,6];
let num3=[...num1,...num2];
console.log(num3);



