<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { timerStore } from "../../stores/timerStore";
const timerData = useStore(timerStore);
</script>

<template>
  <span class="rounded-2xl bg-accent p-2 font-mono text-2xl text-primary">
    <strong>{{ timerData.display }}</strong>
  </span>
</template>
