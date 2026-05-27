//a function is a reusable block of code that performs a specific task, characterized by the addition of static typing to standard JavaScript functions. This allows you to define the expected data types for both parameters (inputs) and return values (outputs), catching errors during development rather than at runtime

// function sayHello(name: string){
//     console.log(`Welcome to the fuctions section ${name}`);
// }
// sayHello("Keshav");

function checkEvenOrOdd(x: number){
    if(x%2===0){
        console.log(`${x} is an even number`);
    }else{
        console.log(`${x} is an odd number`);
    }
}
checkEvenOrOdd(1);


//function with forEach loop

function printFruits(fruits : string[]){
    console.log("-------Function with forEach loop and array: ");
    fruits.forEach((fruit)=>
    {
        console.log(fruit)
    });
}
printFruits(["Apple","Banana","Mango"]);


//functions with object
function employee(emp : {name : string, age : number})
{  console.log("-------The values in the objects are: ");
    console.log(emp.name);
    console.log(emp.age);
}
employee({
    name:"Keshav",
    age:26
});


//function calling another function 

function login(){
    console.log("Login Successful");
}
function dasboard(){
    console.log("Dashboard launched");
}

function app(){
    console.log("-----------Function calling another functions: ")
    login();
    dasboard();
}

app();



//callback function: when 1 function takes another function as parameter

function ringing(){
    console.log("..Ringing...");
}
function dialing(callback:Function){// function accepting another function
    console.log("-------callback function");
    console.log("..Dialing...")
    callback();// ececuting the function
}
dialing(ringing);


//callback function with multiple parameters (functions)

function hi(name: string){
    console.log("Hi " + name);
}
function welcome(name : string){
    console.log("Welcome " + name);
}
function greet(callback1:Function, callback2:Function){// function accepting another function
    console.log("------callback function with multiple parameters (functions)")
    callback1("Keshav");// ececuting the function
    callback2("Rakesh");
}
greet(hi,welcome);


//arrow function

let greet1= () => 
{
    console.log("------Arrow function");

}
greet1();