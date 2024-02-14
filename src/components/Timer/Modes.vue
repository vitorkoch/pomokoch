<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { timerStore, changeMode } from "../../stores/timerStore";
const activeStyles = "bg-accent text-dark font-bold hover:bg-accent/100";

const timerData = useStore(timerStore);
</script>

<template>
  <section
    class="flex flex-row items-center justify-center rounded-2xl bg-secondary shadow-sm shadow-accent"
  >
    <button
      type="button"
      :class="[
        'flex w-32 items-center justify-center rounded-l-2xl p-2 text-center transition-[background-color,width] duration-300 hover:bg-accent/10 active:bg-dark/20',
        [timerData.mode === 'pomodoro' ? activeStyles : ''],
      ]"
      @click="changeMode('pomodoro')"
    >
      Pomodoro
    </button>
    <button
      type="button"
      :class="[
        'flex w-32 items-center justify-center border-x-2 border-light/20 p-2 text-center transition-[background-color] duration-300 hover:bg-accent/10 active:bg-dark/20',
        [timerData.mode === 'shortbreak' ? activeStyles : ''],
      ]"
      @click="changeMode('shortbreak')"
    >
      Short break
    </button>
    <button
      type="button"
      :class="[
        'flex w-32 items-center justify-center rounded-r-2xl p-2 text-center transition-[background-color] duration-300 hover:bg-accent/10 active:bg-dark/20',
        [timerData.mode === 'longbreak' ? activeStyles : ''],
      ]"
      @click="changeMode('longbreak')"
    >
      Long break
    </button>
  </section>
</template>
