//for loop
const users:string [] = ["admin","tester","guest"];
for(let i=0;i<users.length;i++){
    console.log(`Output for for loop ${users[i]}`);
}

//for-each loop : good to use when need to print all the values
const users1:string [] = ["user1","user2","user3"];
users1.forEach((users1) =>{ //arrow function is simplified/advanced typescript function that denotes that this loop will run for all values
    console.log(`Output for forEach Loop ${users1}`);
});

//do-while loop: will run atleast once, even if the condition is false
let attempts =0;
do{
    console.log("Checking do-while loop: Trying to login");
    attempts++;
}while(attempts<3);

let even =2;
do{
    console.log(`Even number with do-while loop ${even}`);
    even+= 2;
}while(even<=10);

//while: when we don't know how many times we need to run the flow, example: wait until element visble

let num=1;
while(num<=5){
    console.log(`${num} with while loop`);
    num++;
}
