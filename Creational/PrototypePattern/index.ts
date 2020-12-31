import { Builder } from './Builder';

class PrototypePattern {
    public static main(args?: string[]): void {
        const builder = new Builder();
        for (let i = 1; i <= 3; i += 1) {
            console.log(builder.createOne('c' + i).toString());
        }
    }
}

PrototypePattern.main();
