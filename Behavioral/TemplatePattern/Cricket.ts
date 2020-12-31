import { Game } from './Game';

export class Cricket extends Game {
  initialize(): void {
    console.log('Cricket Game Finished!');
  }
  startPlay(): void {
    console.log('Cricket Game Initialized! Start playing.');
  }
  endPlay(): void {
    console.log('Cricket Game Started. Enjoy the game!');
  }
}
