<script setup lang="ts">
import { restart } from "../../stores/timerStore";
import Config from "../Config/index.vue";
import { timerStore, togglePause } from "../../stores/timerStore";
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
import {
  PhGear,
  PhArrowCounterClockwise,
  PhPlay,
  PhPause,
  PhX,
} from "@phosphor-icons/vue";
const timerData = useStore(timerStore);
</script>
<template>
  <section
    class="flex flex-row items-center justify-center gap-4 rounded-2xl bg-secondary p-2 shadow-sm shadow-accent"
  >
    <button
      type="button"
      class="transition-colors duration-300 active:text-accent"
      @click="togglePause()"
    >
      <PhPlay v-if="timerData.timer?.isPaused" :size="32" />
      <PhPause v-else :size="32" />
    </button>
    <button
      type="button"
      class="transition-colors duration-300 active:text-accent"
      @click="restart()"
    >
      <PhArrowCounterClockwise :size="32" />
    </button>

    <DialogRoot>
      <DialogTrigger class="transition-colors duration-300 active:text-accent">
        <PhGear :size="32" />
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay class="fixed inset-0 z-30 bg-dark/40" />
        <DialogContent
          class="fixed left-[50%] top-[50%] z-[100] flex max-h-[85vh] min-h-[32rem] w-[90vw] max-w-[520px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-2xl border-2 border-accent/40 bg-secondary p-2 text-light md:p-4"
        >
          <div class="flex h-fit flex-col items-center justify-center">
            <DialogClose>
              <PhX
                :size="32"
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
