import { Animal } from '../Interfaces/Animal';

export class Lion implements Animal {
    sound(): string {
        return 'Sound of lion.';
    }
}