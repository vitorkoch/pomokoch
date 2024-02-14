<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { timerStore } from "../../stores/timerStore";
const timerData = useStore(timerStore);
</script>

<template>
  <span class="text-2xl underline">
    <strong>{{ timerData.display }}</strong>
  </span>
</template>
