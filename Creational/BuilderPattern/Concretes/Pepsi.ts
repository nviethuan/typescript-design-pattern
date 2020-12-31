import { ColdDrink } from '../Functionalities/ColdDrink';

export class Pepsi extends ColdDrink {
    public price(): number{
        return 35.0;
    }

    public name(): string {
        return 'Pepsi'
    }
}