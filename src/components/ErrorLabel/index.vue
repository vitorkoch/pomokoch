<script setup lang="ts">
defineProps<{
  errorMessage: string;
}>();
import { PhXCircle } from "@phosphor-icons/vue";
</script>

<template>
  <span
    class="flex flex-row items-center justify-center gap-1 p-1 text-center font-semibold text-red-500"
  >
    <PhXCircle :size="24" />
    {{ errorMessage }}
  </span>
</template>
