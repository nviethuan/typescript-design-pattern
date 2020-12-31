import { AnimalFactory } from '../Factories/Animals/AnimalFactory';
import { AbstractFactory } from '../Factories/AbstractFactory';
import { FruitFactory } from '../Factories/Fruits/FruitFactory';

export class FactoryProducer {
  public static getFactory(choice: string): AbstractFactory {
    if (choice === 'Animal') {
      return new AnimalFactory();
    }

    if (choice === 'Fruit') {
      return new FruitFactory();
    }
  }
}
