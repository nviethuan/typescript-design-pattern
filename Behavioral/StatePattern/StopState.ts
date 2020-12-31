import { State } from './State';
import { Context } from './Context';

export class StopState implements State {

    public doAction(context: Context): void {
       console.log('Player is in stop state');
       context.setState(this);	
    }
 
    public toString(): string{
       return 'Stop State';
    }
 }