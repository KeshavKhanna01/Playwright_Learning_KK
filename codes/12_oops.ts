//class: It is a "blueprint" used to create objects that bundle data (properties) and behavior (methods) together.

class student{
     name: string;
    age: number;

    constructor(name : string, age: number){
        this.name = name;
        this.age = age;

        console.log("The name provided is: " +name +" and the age provide is: "+ age);

        console.log("Constructor runs automatically as soon as the object is created, helps in initializing the values, storing data and create setup");
    }


    display(){
        console.log(this.name);
        console.log(this.age);
    }
}
let s1 = new student("Keshav", 26);
s1.display();