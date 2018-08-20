import { DrawAPI } from './DrawAPI';
export class GreenCircle implements DrawAPI {
    public drawCircle(radius: number, x: number, y: number){
        console.log("Drawing Circle[ color: green, radius: " + radius + ", x: " + x + ", y: " + y + "]");
    }
}