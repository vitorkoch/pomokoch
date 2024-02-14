<script setup lang="ts">
import { Play, Pause, RotateCcw, Settings } from "lucide-vue-next";
import { togglePause, restart } from "../../stores/timerStore";
import { timerStore } from "../../stores/timerStore";
import { useStore } from "@nanostores/vue";
const timerData = useStore(timerStore);
</script>
<template>
  <section
    class="flex flex-row items-center justify-center gap-4 rounded-2xl bg-secondary p-2 shadow-sm shadow-accent"
  >
    <button
      type="button"
      class="transition-colors duration-300 active:text-accent"
      @click="togglePause()"
    >
      <Play v-if="timerData.state.isPaused" :size="24" />
      <Pause v-else :size="24" />
    </button>
    <button
      type="button"
      class="transition-colors duration-300 active:text-accent"
      @click="restart()"
    >
      <RotateCcw :size="24" />
    </button>

    <button
      type="button"
      class="transition-colors duration-300 active:text-accent"
    >
      <Settings :size="24" />
    </button>
  </section>
</template>
