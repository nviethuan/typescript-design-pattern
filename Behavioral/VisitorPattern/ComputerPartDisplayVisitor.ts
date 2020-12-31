import { ComputerPart } from './ComputerPart';
import { ComputerPartVisitor } from './ComputerPartVisitor';
import { Keyboard } from './Keyboard';
import { Monitor } from './Monitor';
import { Mouse } from './Mouse';

export class ComputerPartDisplayVisitor implements ComputerPartVisitor {
  visit(keyboard: Keyboard): void;
  visit(monitor: Monitor): void;
  visit(mouse: Mouse): void;
  
  visit(c: ComputerPart) {
    if (c instanceof Keyboard) {
      console.log('Keyboard');
    } else
    if (c instanceof Monitor) {
      console.log('Monitor');
    } else 
    if (c instanceof Mouse) {
      console.log('Mouse');
    }
  }
}