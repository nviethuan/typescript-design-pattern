import { AnimalFactory } from '\./Factories/Animals/AnimalFactory';
import { FactoryProducer } from './Products/FactoryProducer';
import { FruitFactory } from './Factories/Fruits/FruitFactory';

class AbstractFactoryPattern {
    public static main(args?: string[]): void {
        const animalFactory: AnimalFactory = FactoryProducer.getFactory('Animal');
        const fruitFactory: FruitFactory = FactoryProducer.getFactory('Fruit');

        const elephant = animalFactory.getAnimal('Elephant');
        const lion = animalFactory.getAnimal('Lion');
        const monkey = animalFactory.getAnimal('Monkey');

        const banana = fruitFactory.getFruit('Banana');
        const orange = fruitFactory.getFruit('Orange');
        const tomato = fruitFactory.getFruit('Tomato');


        console.log(elephant.sound());
        console.log(lion.sound());
        console.log(monkey.sound());
        console.log(banana.color());
        console.log(orange.color());
        console.log(tomato.color());
    }
}

AbstractFactoryPattern.main();