import { Packing } from '../Interfaces/Packing';
import { Item } from '../Interfaces/Item';
import { Wrapper } from '../Concretes/Wrapper';

export abstract class Burger implements Item {
    public packing(): Packing {
        return new Wrapper();
    }
    public abstract price(): number;
    public abstract name(): string;
}