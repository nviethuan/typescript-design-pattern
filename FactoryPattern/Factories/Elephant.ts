import { Animal } from "../Interfaces/Animal";

export class Elephant implements Animal {
    sound(): string {
        return "Sound of elephant."
    }
}