import { MediaPlayer } from '../Interfaces/MediaPlayer';
import { AdvancedMediaPlayer } from '../Interfaces/AdvancedMediaPlayer';
import { VlcPlayer } from '../Advanceds/VlcPlayer';
import { Mp4Player } from '../Advanceds/Mp4Player';

export class MediaAdapter implements MediaPlayer {
  public advancedMusicPlayer: AdvancedMediaPlayer;

  public constructor(audioType: string) {
    if (audioType === 'vlc') {
      this.advancedMusicPlayer = new VlcPlayer();

    } else if (audioType === 'mp4') {
      this.advancedMusicPlayer = new Mp4Player();
    }
  }

  public play(audioType: string, fileName: string): void {
    if (audioType === 'vlc') {
      this.advancedMusicPlayer.playVlc(fileName);
    }
    else if (audioType === 'mp4') {
      this.advancedMusicPlayer.playMp4(fileName);
    }
  }
}
