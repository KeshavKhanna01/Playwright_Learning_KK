//Switch statement : control flow with multiple possible values/ easier to read
let day: number = 2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}


let fruit: string="Guvava";
switch(fruit){
    case "Apple":
    case "Banana":
    case "Mango":
        console.log("Fruit is available");
        break;
    default:
        console.log("Fruit not available");
}


//question: Select different browsers with the help of switch statement

let browser = "Chrome";

switch(browser){
    case "Firefox":
        console.log("Firefox Browser");
        break;
    case "Chrome":
        console.log("Chrome Browser");
        break;
    case "Edge":
        console.log("Edge Browser");
        break;
    default:
        console.log("Oops try again");
}