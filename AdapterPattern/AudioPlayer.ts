import { MediaPlayer } from "./MediaPlayer";
import { MediaAdapter } from "./MediaAdapter";

export class AudioPlayer implements MediaPlayer {
    public mediaAdapter: MediaAdapter;

    public play(audioType: string, fileName: string): void {
        //inbuilt support to play mp3 music files
        if (audioType === "mp3") {
            console.log("Playing mp3 file. Name: " + fileName);
        }

        //mediaAdapter is providing support to play other file formats
        else if (audioType === "vlc" || audioType === "mp4") {
            this.mediaAdapter = new MediaAdapter(audioType);
            this.mediaAdapter.play(audioType, fileName);
        }

        else {
            console.log("Invalid media. " + audioType + " format not supported");
        }
    }
}