import { Shape } from "./13_Abstraction_Shape";

class circle extends Shape {
    draw():void{
        console.log("Drawing Circle");
    }
}
const c = new circle();
c.display();
c.draw();