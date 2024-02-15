<script setup lang="ts">
import { onMounted } from "vue";
import { timerStore, restart as restartTimer } from "../../stores/timerStore";
import { useStore } from "@nanostores/vue";

const timerData = useStore(timerStore);

onMounted(() => {
  restartTimer();

  setInterval(() => {
    const { timer, mode } = timerData.value;
    if (!timer || !mode) return;
    timerStore.setKey("progressPercentage", timer.percentageOf(mode));
    timerStore.setKey("display", timer.getDisplay(mode));
  }, 100);
});
</script>

<template>
  <div
    class="my-2 flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-accent/40 bg-primary p-4 md:p-12"
  >
    <slot />
  </div>
</template>
