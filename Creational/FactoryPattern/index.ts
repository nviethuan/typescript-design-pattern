import { AnimalFactory } from './Factories/AnimalFactory';

class FactoryPattern {
    public static main(args?: string[]): void {
        const animalFactory = new AnimalFactory();

        const voi = animalFactory.getAnimal('Elephant');
        const suTu = animalFactory.getAnimal('Lion');
        const khi = animalFactory.getAnimal('Monkey');

        console.log(voi.sound());
        console.log(suTu.sound());
        console.log(khi.sound());
    }
};
FactoryPattern.main();