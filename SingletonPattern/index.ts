import { SingleComputer } from './SingleComputer';
class SingletonPattern {
    public static main(args?: string[]): void {
        const computer1: SingleComputer = SingleComputer.getInstance();
        const computer2: SingleComputer = SingleComputer.getInstance();

        computer1.logMessage();
        computer2.logMessage();
    }
}

SingletonPattern.main();