import { Strategy } from './Strategy';

export class Context {
  private strategy: Strategy;

  public constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public executeStrategy(num1: number, num2: number): Number {
    return this.strategy.doOperation(num1, num2);
  }
}
