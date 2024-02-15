export type Mode = "pomodoro" | "longbreak" | "shortbreak";

export type ModesMinutes = {
  pomodoro: number;
  longbreak: number;
  shortbreak: number;
};

export type ModesProgressPercentage = {
  pomodoro: number;
  longbreak: number;
  shortbreak: number;
};

export const defaultModesMinutes: ModesMinutes = {
  pomodoro: 25,
  longbreak: 15,
  shortbreak: 5,
};

export class Timer {
  startTimeMs: number;
  modes: ModesMinutes;
  constructor({
    startTimeMs,
    modesMinutes,
  }: {
    startTimeMs: number;
    modesMinutes: ModesMinutes;
  }) {
    this.startTimeMs = startTimeMs;
    this.modes = { ...defaultModesMinutes, ...modesMinutes };
  }

  remainMilisecondsOf(mode: Mode) {
    const passedMs = Date.now() - this.startTimeMs;
    const remainMs = this.modes[mode] * 60 * 1000 - passedMs;
    if (remainMs < 0) return 0;
    return remainMs;
  }

  percentageOf(mode: Mode): number {
    const percentage =
      (this.remainMilisecondsOf(mode) / (this.modes[mode] * 60 * 1000)) * 100;
    return percentage;
  }

  getDisplay(mode: Mode) {
    const totalSeconds = this.remainMilisecondsOf(mode) / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const minutesText = `${minutes}`.padStart(2, "0");
    const secondsText = `${seconds}`.padStart(2, "0");
    return `${minutesText}:${secondsText}`;
  }
}
