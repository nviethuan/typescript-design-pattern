import { Image } from './Image';

export class RealImage implements Image {
    private fileName: string;

    public constructor(fileName: string){
        this.fileName = fileName;
        this.loadFromDisk(fileName);
    }

    private loadFromDisk(fileName: string): void {
        console.log("Loading " + fileName);
        
    }

    public display(): void {
        console.log("Displaying " + this.fileName);
    }
}