import { TerminalExpression } from './TerminalExpression';
import { Expression } from './Expression';
import { OrExpression } from './OrExpression';
import { AndExpression } from './AndExpression';
class InterpreterPattern {
    public static getMaleExpression(): Expression {
        const robert: Expression = new TerminalExpression("Robert");
        const john: Expression = new TerminalExpression("John");

        return new OrExpression(robert, john);
    }
    
    public static getMarriedWomanExpression(): Expression {
        const julie: Expression = new TerminalExpression("Julie");
        const married: Expression = new TerminalExpression("Married");

        return new AndExpression(julie, married);
    }

    public static main(args?: string[]): void {
        const isMale: Expression = this.getMaleExpression();
        const isMarriedWoman: Expression = this.getMarriedWomanExpression();

        console.log("John is male? " + isMale.interpret("John"));
        console.log("Julie is a married women? " + isMarriedWoman.interpret("Married Julie"));
    }
}