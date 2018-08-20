import { Burger } from "../Functionalities/Burger";

export class ChickenBurger extends Burger {
    public price(): number{
        return 50.5;
    }

    public name(): string {
        return "Chicken Burger"
    }
}