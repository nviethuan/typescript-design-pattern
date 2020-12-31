import { ComputerPart } from './ComputerPart';
import { ComputerPartVisitor } from './ComputerPartVisitor';

export class Keyboard implements ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor) {
    computerPartVisitor.visit(this);
  }
}
