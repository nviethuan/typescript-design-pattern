import { Item } from '../Interfaces/Item';
import { Packing } from '../Interfaces/Packing';
import { Bottle } from '../Concretes/Bottle';

export abstract class ColdDrink implements Item {
    public packing(): Packing {
        return new Bottle();
    }
    public abstract price(): number;
    public abstract name(): string;
}