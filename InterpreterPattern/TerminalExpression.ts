import { Expression } from './Expression';

export class TerminalExpression implements Expression {
    private data: string;

    public constructor(data: string) {
        this.data = data;
    }

    public interpret(context: string): boolean {
        return context.includes(this.data);
    }
}