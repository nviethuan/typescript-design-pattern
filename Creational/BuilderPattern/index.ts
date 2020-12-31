import { MealBuilder } from './MealBuilder';
import { Meal } from './Meal';
class BuilderFactory {
    public static main(args?: string[]): void {
        const mealBuilder: MealBuilder = new MealBuilder();
        
        const vegMeal: Meal = mealBuilder.prepareVegMeal();
        console.log('Vegetable Meal');
        vegMeal.showItems();
        console.log(`Total Cost: ${ vegMeal.getCost() }`);
        
        const nonVegMeal: Meal = mealBuilder.prepareNonVegMeal();
        console.log(`\n\nNon-Veg Meal: `);
        nonVegMeal.showItems();
        console.log(`Total Cost: ${ nonVegMeal.getCost() }`);
    }
}

BuilderFactory.main();
