import { Packing } from '../Interfaces/Packing';

export class Wrapper implements Packing {
  public pack(): string {
    return 'Wrapper';
  }
}
