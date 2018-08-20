import { Monkey } from './Monkey';
import { Lion } from './Lion';
import { Elephant } from './Elephant';
import { Animal } from '../Interfaces/Animal';
export class AnimalFactory {
    public getAnimal(kind: string): Animal {
        
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
}