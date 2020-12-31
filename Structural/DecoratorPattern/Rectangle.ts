import { Shape } from './Shape';
export class Rectangle implements Shape {
  public draw(): void {
    console.log('Shape: Rectangle');
  }
}
