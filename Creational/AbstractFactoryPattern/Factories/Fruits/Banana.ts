import { Fruits } from '../../Interfaces/Fruits';

export class Banana implements Fruits {
  color(): string {
    return 'I am banana, my color is yellow.'
  }
}
