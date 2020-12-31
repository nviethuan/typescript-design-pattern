import { RedCircle } from './RedCircle';
import { Shape } from './Shape';
import { Circle } from './Circle';
import { GreenCircle } from './GreenCircle';

class BrigePattern {
    public static main(args?: string[]): void {
        const redCircle: Shape = new Circle(100, 100, 10, new RedCircle());
        const greenCircle: Shape = new Circle(100, 100, 9, new GreenCircle());

        redCircle.draw();
        greenCircle.draw();
    }
}

BrigePattern.main();
