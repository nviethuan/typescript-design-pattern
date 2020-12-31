import { AdvancedMediaPlayer } from '../Interfaces/AdvancedMediaPlayer';

export class VlcPlayer implements AdvancedMediaPlayer {
  playVlc(fileName: string): void {
    console.log(`Playing vlc file. Name: ${fileName}`);
  };
  playMp4(fileName: string): void { };
}
