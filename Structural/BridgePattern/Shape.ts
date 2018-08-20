import { DrawAPI } from './DrawAPI';
export abstract class Shape {
    protected DrawAPI: DrawAPI;

    protected constructor(drawAPI: DrawAPI){
        this.DrawAPI = drawAPI;
    }

    public abstract draw(): void;
}