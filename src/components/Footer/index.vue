<script setup>
import { PhHeartStraight } from "@phosphor-icons/vue";
</script>
<template>
  <footer
    class="flex max-w-[90%] flex-col items-center justify-center gap-1 rounded-2xl border-2 border-accent/40 bg-primary p-4"
  >
    <span class="text-center">
      Hi! I'm <strong class="text-accent">Vitor Koch</strong>, discover more
      about me
      <a href="https://media.vitorkoch.com" class="text-accent underline">
        here
      </a>
    </span>
    <span class="flex items-center justify-center gap-1">
      Have a good productivity!
      <PhHeartStraight class="inline text-accent" :size="20" weight="fill" />
    </span>
  </footer>
</template>
