import { FrontController } from './FrontController';

class FrontControllerPattern {
    public static main(args?: string[]): void {
        const frontController: FrontController = new FrontController();
        frontController.dispatchRequest('HOME');
        frontController.dispatchRequest('STUDENT');
    }
}

FrontControllerPattern.main();
