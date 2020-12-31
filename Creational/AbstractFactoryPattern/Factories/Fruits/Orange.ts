import { Fruits } from '../../Interfaces/Fruits';

export class Orange implements Fruits {
  color(): string {
    return 'I am orange, my color is orange.'
  }
}
