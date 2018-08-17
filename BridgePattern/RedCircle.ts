import { DrawAPI } from './DrawAPI';
export class RedCircle implements DrawAPI {
    public drawCircle(radius: number, x: number, y: number){
        console.log("Drawing Circle[ color: red, radius: " + radius + ", x: " + x + ", y: " + y + "]");
    }
}