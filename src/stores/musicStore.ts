import { map } from "nanostores";

type MusicStore = {
  youtubeURL: string;
};

export const musicStore = map<MusicStore>({
  youtubeURL: "https://youtu.be/I7me4BTq9OA?si=6NU7K0SwJVRo6bRV",
});

export function changeMusic(newYoutubeURL: string) {
  musicStore.setKey("youtubeURL", newYoutubeURL);
}
