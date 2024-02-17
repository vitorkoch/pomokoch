<script setup lang="ts">
import { Play, Pause, RotateCcw, Settings, X } from "lucide-vue-next";
import { restart } from "../../stores/timerStore";
import Config from "../Config/index.vue";
import { timerStore } from "../../stores/timerStore";
import { useStore } from "@nanostores/vue";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "radix-vue";
const timerData = useStore(timerStore);
</script>
<template>
  <section
    class="flex flex-row items-center justify-center gap-4 rounded-2xl bg-secondary p-2 shadow-sm shadow-accent"
  >
    <button
      type="button"
      class="transition-colors duration-300 active:text-accent"
      @click="timerData.timer?.togglePause()"
    >
      <Play v-if="timerData.timer?.isPaused" :size="24" />
      <Pause v-else :size="24" />
    </button>
    <button
      type="button"
      class="transition-colors duration-300 active:text-accent"
      @click="restart()"
    >
      <RotateCcw :size="24" />
    </button>

    <DialogRoot>
      <DialogTrigger class="transition-colors duration-300 active:text-accent">
        <Settings :size="24" />
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay class="fixed inset-0 z-30 bg-dark/40" />
        <DialogContent
          class="fixed left-[50%] top-[50%] z-[100] flex max-h-[85vh] min-h-[32rem] w-[90vw] max-w-[520px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-2xl border-2 border-accent/40 bg-secondary p-2 text-light md:p-4"
        >
          <div class="flex h-fit flex-col items-center justify-center">
            <DialogClose>
              <X
                :size="28"
                class="transition-colors duration-300 active:text-accent"
              />
            </DialogClose>
            <DialogTitle class="text-2xl text-accent">
              <strong>Settings</strong>
            </DialogTitle>
          </div>
          <div class="flex w-full flex-1 flex-col items-center justify-center">
            <DialogDescription class="text-center">
              Setup your pomodoro config!
            </DialogDescription>
            <Config />
          </div>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </section>
</template>
