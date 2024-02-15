<script setup lang="ts">
import { ProgressIndicator, ProgressRoot } from "radix-vue";
import { useStore } from "@nanostores/vue";
import { timerStore } from "../../stores/timerStore";
const timerData = useStore(timerStore);
</script>

<template>
  <ProgressRoot
    :model-value="timerData.progressPercentage"
    class="relative h-4 w-full overflow-hidden rounded-full bg-secondary sm:h-5 sm:w-[300px]"
  >
    <ProgressIndicator
      class="size-full rounded-full bg-light transition-transform duration-[333ms] ease-in-out"
      :style="`transform: translateX(-${timerData.progressPercentage}%)`"
    />
  </ProgressRoot>
</template>
