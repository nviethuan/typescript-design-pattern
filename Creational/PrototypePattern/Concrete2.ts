import { Prototype } from './Prototype';

export class Concrete2 implements Prototype {

  clone(): Prototype {
    return new Concrete2();
  }

  toString(): string {
    return 'This is Concrete2';
  }
}
