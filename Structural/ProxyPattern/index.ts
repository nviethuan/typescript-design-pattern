import { Image } from './Image';
import { ProxyImage } from './ProxyImage';

class ProxyPattern {
    public static main(args?: string[]): void {
        const image: Image = new ProxyImage('test_10mb.jpg');

        //image will be loaded from disk
        image.display();
        console.log('');

        //image will not be loaded from disk
        image.display();
    }
}

ProxyPattern.main();
