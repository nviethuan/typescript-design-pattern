import { Item } from './Interfaces/Item';

export class Meal {
  private items: Array<Item> = new Array<Item>();

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public getCost(): number {
    let cost: number = 0.0;
    for (let e in this.items) {
      cost += this.items[e].price();
    }
    return cost;
  }

  public showItems(): void {
    for (let e in this.items) {
      console.log(`Item : ${this.items[e].name()}, Packing: ${this.items[e].packing().pack()}, Price: ${this.items[e].price()}`);
    }
  }
}
