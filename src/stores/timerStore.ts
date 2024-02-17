import { map } from "nanostores";
import {
  type Mode,
  type ModesMinutes,
  defaultModesMinutes,
  Timer,
} from "../timer";

type Configuration = {
  modesMinutes: ModesMinutes;
};

type TimerStore = {
  mode: Mode;
  config: Configuration;
  progressPercentage: number;
  display: string;
  timer: Timer | null;
};

export const timerStore = map<TimerStore>({
  mode: "pomodoro",
  progressPercentage: 0,
  display: "25:00",
  config: {
    modesMinutes: defaultModesMinutes,
  },
  timer: null,
});

export function changeMode(newMode: Mode) {
  timerStore.setKey("mode", newMode);
  restart();
}

export function changeProgress(newProgress: number) {
  timerStore.setKey("progressPercentage", newProgress);
}

export function changeDisplay(newDisplay: string) {
  timerStore.setKey("display", newDisplay);
}

export function restart() {
  const config = timerStore.get().config;
  timerStore.setKey(
    "timer",
    new Timer({ startTimeMs: Date.now(), modesMinutes: config.modesMinutes }),
  );
}
