//if else statement in ts

let age= 16;

if(age>=18){
    console.log("Eligible to Vote");
}else{
    console.log("Not eligible to Vote");
}

//nested if-else

let userName : string = "admin";
let password : number = 12345;

if(userName === "admin"){
    if(password === 12345){
        console.log("Login successful");
    }else{
        console.log("Wrong Password");
    }
}else{
    console.log("Wrong UserName");
}

//else if

let marks=85;

if(marks>=95){
    console.log("Grade A");
}else if(marks>=85){
    console.log("Grade B");
}else if(marks>=75){
    console.log("Grade C");
}else{
    console.log("Grade D");
}