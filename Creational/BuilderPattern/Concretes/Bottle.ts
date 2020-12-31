import { Packing } from '../Interfaces/Packing';

export class Bottle implements Packing {
  public pack(): string {
    return 'Bottle';
  }
}
