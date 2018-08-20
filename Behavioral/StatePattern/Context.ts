import { State } from "./State";

export class Context {
    private state: State;
 
    public Context(){
       this.state = null;
    }
 
    public setState(state: State): void{
       this.state = state;		
    }
 
    public getState(): State{
       return this.state;
    }
 }