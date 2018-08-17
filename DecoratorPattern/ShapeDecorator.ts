import { Shape } from './Shape';

export abstract class ShapeDecorator implements Shape {
    protected decoratedShape: Shape;

    public constructor(decoratedShape: Shape) {
        this.decoratedShape = decoratedShape;
    }
    public draw(): void {
        this.decoratedShape.draw()
    }
}