import { ColdDrink } from '../Functionalities/ColdDrink';

export class Coke extends ColdDrink {
  public price(): number {
    return 30.0;
  }

  public name(): string {
    return 'Coke'
  }
}
