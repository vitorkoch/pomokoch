<script setup lang="ts">
defineProps<{
  errorMessage: string;
}>();
import { XCircle } from "lucide-vue-next";
</script>

<template>
  <span
    class="flex flex-row items-center justify-center gap-1 p-1 text-center font-semibold text-red-500"
  >
    <XCircle />
    {{ errorMessage }}
  </span>
</template>
