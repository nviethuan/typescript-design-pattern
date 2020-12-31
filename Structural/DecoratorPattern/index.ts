import { Shape } from './Shape';
import { Circle } from './Circle';
import { RedShapeDecorator } from './RedShapeDecorator';
import { Rectangle } from './Rectangle';

class DecotatorPattern {
  public static main(agrs?: string[]) {
    const circle: Shape = new Circle();
    const rectangle: Shape = new Rectangle();
    const redCircle: Shape = new RedShapeDecorator(circle);
    const redRectangle: Shape = new RedShapeDecorator(rectangle);

    console.log('Circle with normal border');
    circle.draw();
    console.log('\nRectangle with normal border');
    rectangle.draw();
    console.log('\nCircle of red border');
    redCircle.draw();
    console.log('\nRectangle of red border');
    redRectangle.draw()
  }
}

DecotatorPattern.main();
