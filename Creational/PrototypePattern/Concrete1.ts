import { Prototype } from './Prototype';

export class Concrete1 implements Prototype {

    clone() : Prototype {
        return new Concrete1();
    }

    toString(): string {
        return 'This is Concrete1';
    }
}