import { State } from './State';
import { Context } from './Context';

export class StartState implements State {

  public doAction(context: Context): void {
    console.log('Player is in start state');
    context.setState(this);
  }

  public toString(): String {
    return 'Start State';
  }
}
