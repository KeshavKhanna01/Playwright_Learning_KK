export abstract class Shape{
    abstract draw(): void; //must be implemented in child class

display(){
    console.log("Shape is present");
}
}
//abstract class shape can not create object of this class
//abstract method draw() - has no body, but body should be defined in child class
//class circle extends shape - inheritance
//display in child class is- non abstract method 
//draw in child class is implementation of abstract class