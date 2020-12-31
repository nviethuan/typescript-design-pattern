import { Animal } from '../../FactoryPattern/Interfaces/Animal';
import { Fruits } from '../Interfaces/Fruits';
export abstract class AbstractFactory {
  abstract getAnimal(kind: string): Animal;
  abstract getFruit(color: string): Fruits;
}
