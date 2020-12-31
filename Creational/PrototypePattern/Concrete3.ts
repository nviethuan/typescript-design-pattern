import { Prototype } from './Prototype';

export class Concrete3 implements Prototype {

  clone(): Prototype {
    return new Concrete3();
  }

  toString(): string {
    return 'This is Concrete3';
  }
}
