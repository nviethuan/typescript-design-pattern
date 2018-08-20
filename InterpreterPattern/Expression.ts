export interface Expression {
    interpret(context: String): boolean;
}