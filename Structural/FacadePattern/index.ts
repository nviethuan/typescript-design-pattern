import { ShapeMaker } from "./ShapeMaker";

class FacadePattern {
    public static main(args?: string[]): void {
        const shapeMaker: ShapeMaker = new ShapeMaker();

        shapeMaker.drawCircle();
        shapeMaker.drawRectangle();
        shapeMaker.drawSquare();
    }
}

FacadePattern.main();
