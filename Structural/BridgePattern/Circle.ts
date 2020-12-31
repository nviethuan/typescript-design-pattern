import { Shape } from './Shape';
import { DrawAPI } from './DrawAPI';

export class Circle extends Shape{
    private x: number;
    private y: number;
    private radius: number;

    public constructor(x: number, y: number, radius: number, drawAPI: DrawAPI){
        super(drawAPI);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    public draw(): void {
        this.DrawAPI.drawCircle(this.radius, this.x, this.y);
    }
}