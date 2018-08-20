import { Strategy } from './Strategy';

export class OperationSubstract implements Strategy {
    public doOperation(num1: number, num2: number): Number {
        return num1 - num2;
    }
}