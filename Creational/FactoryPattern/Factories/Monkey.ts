import { Animal } from '../Interfaces/Animal';

export class Monkey implements Animal {
    sound(): string {
        return 'Sound of monkey';
    }
}