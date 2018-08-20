import { AdvancedMediaPlayer } from "../Interfaces/AdvancedMediaPlayer";

export class Mp4Player implements AdvancedMediaPlayer {
    playMp4(fileName: string): void {
        console.log(`Playing mp4 file. Name: ${fileName}`);
    };
    playVlc(fileName: string): void {};
}