import { Banana } from './Banana';
import { Orange } from './Orange';
import { Tomato } from './Tomato';
import { Animal } from '../../Interfaces/Animal';
import { AbstractFactory } from '../AbstractFactory';
import { Fruits } from '../../Interfaces/Fruits';

export class FruitFactory extends AbstractFactory {
  public getFruit(color: string): Fruits {
    if (color === null) {
      return null;
    }

    if (color === 'Banana') {
      return new Banana();
    }

    if (color === 'Orange') {
      return new Orange();
    }

    if (color === 'Tomato') {
      return new Tomato();
    }

    return null;
  }

  public getAnimal(kind: string): Animal {
    return null;
  }
}
