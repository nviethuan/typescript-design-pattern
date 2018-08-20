import { Circle } from './Circle';
import { Shape } from "./Shape";
import { Rectangle } from './Rectangle';
import { Square } from './Square';

export class ShapeMaker {
    private circle: Shape;
    private rectangle: Shape;
    private square: Shape;

    public constructor(){
        this.circle = new Circle();
        this.rectangle = new Rectangle();
        this.square = new Square();
    }

    public drawCircle(): void {
        this.circle.draw();
    }

    public drawRectangle(): void {
        this.rectangle.draw();
    }

    public drawSquare(): void {
        this.square.draw();
    }
}