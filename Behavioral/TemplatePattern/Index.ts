import { Game } from "./Game";
import { Cricket } from "./Cricket";
import { Football } from "./Football";

class TemplatePattern {
    public static main(args?: string[]): void {
        let game: Game = new Cricket();
        game.play;
        console.log();

        game = new Football();
        game.play;
    }
}

TemplatePattern.main();