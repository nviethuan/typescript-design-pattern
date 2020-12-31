import { ChatRoom } from './ChatRoom';
export class User {
  private name: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public constructor(name: string) {
    this.name = name;
  }

  public sendMessage(message: string): void {
    ChatRoom.showMessage(this, message);
  }
}
