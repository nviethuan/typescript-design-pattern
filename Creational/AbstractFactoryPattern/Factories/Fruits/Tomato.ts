import { Fruits } from '../../Interfaces/Fruits';

export class Tomato implements Fruits {
    color(): string {
        return 'I am tomato, my color is red.'
    }
}