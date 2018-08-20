import { Game } from "./Game";

export class Football extends Game {
    initialize(): void {
        console.log("Football Game Finished!");
    }
    
    startPlay(): void {
        console.log("Football Game Initialized! Start playing.");
    }

    endPlay(): void {
        console.log("Football Game Started. Enjoy the game!");
    }


}