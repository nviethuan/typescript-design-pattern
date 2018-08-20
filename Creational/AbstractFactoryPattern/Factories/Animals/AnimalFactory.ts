import { Elephant } from './Elephant';
import { Lion } from './Lion';
import { Monkey } from './Monkey';
import { Animal } from '../../Interfaces/Animal';
import { AbstractFactory } from "../AbstractFactory";
import { Fruits } from '../../Interfaces/Fruits';

export class AnimalFactory extends AbstractFactory {
    public getAnimal(kind: string): Animal{
        if(kind === null){
            return null;
        }

        if(kind === "Elephant"){
            return new Elephant();
        }

        if(kind === "Lion"){
            return new Lion();
        }

        if(kind === "Monkey"){
            return new Monkey();
        }

        return null;
    }

    public getFruit(color: string): Fruits{
        return null;
    }
}