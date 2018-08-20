import { Burger } from "../Functionalities/Burger";

export class VegBurger extends Burger {
    public price(): number{
        return 25.0;
    }

    public name(): string {
        return "Vegetable Burger"
    }
}