import { Coke } from './Concretes/Coke';
import { ChickenBurger } from './Concretes/ChickenBurger';
import { Pepsi } from './Concretes/Pepsi';
import { VegBurger } from './Concretes/VegBurger';
import { Meal } from './Meal';

export class MealBuilder {
    public prepareVegMeal(): Meal {
        const meal: Meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }

    public prepareNonVegMeal(): Meal {
        const meal: Meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Pepsi());
        return meal;
    }
}