import { Animal } from "./13_Inheritance_Animal";

class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }
}

const d = new Dog();

d.bark();
d.eat();