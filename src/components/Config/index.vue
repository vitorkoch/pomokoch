<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import ErrorLabel from "../ErrorLabel/index.vue";
import { timerStore, restart as restartTimer } from "../../stores/timerStore";
import { reactive, ref, watch } from "vue";
import { z } from "zod";
const timerData = useStore(timerStore);

const modesConfigSchema = z.object({
  pomodoroMinutes: z.coerce
    .number()
    .min(1, "Pomodoro time must be greater than 0")
    .max(60, "Pomodoro time must be less than 61"),
  shortBreakMinutes: z.coerce
    .number()
    .min(1, "Short break time must be greater than 0")
    .max(60, "Short break time must be less than 61"),
  longBreakMinutes: z.coerce
    .number()
    .min(1, "Long break time must be greater than 0")
    .max(60, "Long break time must be less than 61"),
});

type ModesConfigSchema = z.infer<typeof modesConfigSchema>;

const modes = reactive<ModesConfigSchema>({
  pomodoroMinutes: timerData.value.config.modesMinutes.pomodoro,
  shortBreakMinutes: timerData.value.config.modesMinutes.shortbreak,
  longBreakMinutes: timerData.value.config.modesMinutes.longbreak,
});

const errors = ref<Record<keyof ModesConfigSchema, string[]>>({
  longBreakMinutes: [],
  pomodoroMinutes: [],
  shortBreakMinutes: [],
});

watch(modes, () => {
  const parsed = modesConfigSchema.safeParse(modes);

  if (!parsed.success) {
    const { fieldErrors } = parsed.error.formErrors;
    errors.value = {
      pomodoroMinutes: fieldErrors.pomodoroMinutes || [],
      shortBreakMinutes: fieldErrors.shortBreakMinutes || [],
      longBreakMinutes: fieldErrors.longBreakMinutes || [],
    };
    return;
  }
  errors.value = {
    pomodoroMinutes: [],
    shortBreakMinutes: [],
    longBreakMinutes: [],
  };
  timerStore.setKey("config", {
    modesMinutes: {
      pomodoro: parsed.data.pomodoroMinutes,
      shortbreak: parsed.data.shortBreakMinutes,
      longbreak: parsed.data.longBreakMinutes,
    },
  });
  restartTimer();
});
</script>
<template>
  <div class="flex w-[100%] flex-col items-center justify-center gap-2 p-2">
    <div
      class="flex w-[90%] flex-col items-center justify-center gap-2 md:w-[80%]"
    >
      <label for="pomodoroTimeInput" class="text-center">
        Pomodoro minutes
        <span class="text-light/80">(Default: 25)</span>
      </label>
      <input
        id="pomodoroTimeInput"
        v-model="modes.pomodoroMinutes"
        class="w-[80%] rounded-2xl border-2 border-accent/40 bg-dark/20 p-2"
        type="number"
        :max="60"
        :min="0"
      />
      <ErrorLabel
        v-for="error in errors.pomodoroMinutes"
        :key="error"
        :error-message="error"
      />
    </div>
    <div
      class="flex w-[90%] flex-col items-center justify-center gap-2 md:w-[80%]"
    >
      <label for="pomodoroTimeInput" class="text-center">
        Short break minutes
        <span class="text-light/80">(Default: 5)</span>
      </label>
      <input
        id="pomodoroTimeInput"
        v-model="modes.shortBreakMinutes"
        class="w-[80%] rounded-2xl border-2 border-accent/40 bg-dark/20 p-2"
        type="number"
        :max="60"
        :min="0"
      />
      <ErrorLabel
        v-for="error in errors.shortBreakMinutes"
        :key="error"
        :error-message="error"
      />
    </div>
    <div
      class="flex w-[90%] flex-col items-center justify-center gap-2 md:w-[80%]"
    >
      <label for="pomodoroTimeInput" class="text-center">
        Long break minutes
        <span class="text-light/80">(Default: 15)</span>
      </label>
      <input
        id="pomodoroTimeInput"
        v-model="modes.longBreakMinutes"
        class="w-[80%] rounded-2xl border-2 border-accent/40 bg-dark/20 p-2"
        type="number"
        :max="60"
        :min="0"
      />
      <ErrorLabel
        v-for="error in errors.longBreakMinutes"
        :key="error"
        :error-message="error"
      />
    </div>
  </div>
</template>
