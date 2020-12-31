import { Computer } from './Computer';
import { ComputerPart } from './ComputerPart';
import { ComputerPartDisplayVisitor } from './ComputerPartDisplayVisitor';

class VisitorPatternDemo {
  public static main(args?: string[]): void {

    const computer: ComputerPart = new Computer();
    computer.accept(new ComputerPartDisplayVisitor());
  }
}

VisitorPatternDemo.main();
