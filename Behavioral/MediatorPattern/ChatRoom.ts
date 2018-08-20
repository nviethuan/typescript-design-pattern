import { User } from "./User";

export class ChatRoom {
    public static showMessage(user: User, message: string): void {
        let date: Date = new Date();
        console.log(date + " [" + user.getName() + "] : " + message)
    }
}