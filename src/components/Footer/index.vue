<script setup>
import { Heart } from "lucide-vue-next";
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
    <span>Have a good productivity! <Heart class="inline text-accent" /></span>
  </footer>
</template>
