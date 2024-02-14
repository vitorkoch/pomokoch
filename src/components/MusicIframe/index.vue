<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { musicStore } from "../../stores/musicStore";
import { ref } from "vue";
const musicData = useStore(musicStore);
const videoID = ref(
  musicData.value.youtubeURL
    .replace("https://", "")
    .replace("www.youtube.com/", "")
    .replace("youtu.be/", "")
    .replace("live/", ""),
);
</script>
<template>
  <iframe
    class="aspect-video min-w-[42rem] rounded-2xl border-2 border-accent/40 bg-primary p-2"
    :src="'https://www.youtube.com/embed/' + videoID"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</template>
