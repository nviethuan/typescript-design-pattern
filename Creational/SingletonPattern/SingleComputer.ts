export class SingleComputer {
  private static instance: SingleComputer = new SingleComputer();

  private constructor() { }

  public static getInstance(): SingleComputer {
    return SingleComputer.instance;
  }

  public logMessage(): void {
    console.log('Hello');
  }
}
