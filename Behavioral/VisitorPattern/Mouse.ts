import { ComputerPart } from './ComputerPart';
import { ComputerPartVisitor } from './ComputerPartVisitor';

export class Mouse implements ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor) {
    computerPartVisitor.visit(this);
  }
}
