import { Strategy } from './Strategy';

export class OperationAdd implements Strategy {
    public doOperation(num1: number, num2: number): Number {
        return num1 + num2;
    }
}