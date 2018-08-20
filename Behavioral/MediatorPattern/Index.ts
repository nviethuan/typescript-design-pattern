import { User } from "./User";

class MediatorPattern {
    public static main(args?: string[]): void {
        const robert: User = new User('Robert');
        const john: User = new User('John');

        robert.sendMessage("Hi! John!");
        john.sendMessage("Hello! Robert!");
    }
}

MediatorPattern.main();