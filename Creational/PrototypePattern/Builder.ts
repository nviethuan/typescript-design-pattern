import { Prototype } from './Prototype';
import { Concrete1 } from './Concrete1';
import { Concrete2 } from './Concrete2';
import { Concrete3 } from './Concrete3';

export class Builder {
  private prototypeMap: { [s: string]: Prototype; } = {};

  constructor() {
    this.prototypeMap['c1'] = new Concrete1();
    this.prototypeMap['c2'] = new Concrete2();
    this.prototypeMap['c3'] = new Concrete3();
  }

  createOne(s: string): Prototype {
    console.log(s);
    return this.prototypeMap[s].clone();
  }
}
