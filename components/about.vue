<script setup lang="ts">
import moment from "moment/moment";

let myAge = computed(() => {
  let endDate = moment()
  return moment.duration(endDate.diff(moment("2003-8-6"))).asYears().toString().split(".")[0]
})
let year = computed(() => {
  let endDate = moment()
  return moment.duration(endDate.diff(moment("2020-1-1"))).asYears().toString().split(".")[0]
})
</script>

<template>
  <div class="text-gray-400 select-none text-lg">
    <!--    <h1 class="pt-2 text-4xl">Hi there, I'm Sheak Sadi</h1>-->
    <p class=" pb-6 relative">I'm an <span class="text-gray-200 group relative">{{ myAge }}
    <span class="absolute bg-slate-800 top-[-100%] left-[-100%] inline-block text-nowrap
                  rounded px-1 text-sm  group-hover:scale-100 scale-0
                   transition-all duration-100"
    >well its complicated</span>
    </span>-year-old self-taught Software Developer, now
      studying Computer Science and Engineering to become a coding wizard.

    </p>
    <p class=" pb-6">
      In 2020 I had bunch of time in my hand So like every other kid I was playing bunch of minecraft and other games.
      My passion for programming began with Minecraft modding, when I
      was helping
      a friend with plugins and mods for his server.
    </p>
    <p class="pb-6">Then I thought to myself, "Why stop at Minecraft?
      Let's
      conquer the entire internet!" So, I started my journey into the wild and wonderful world of web
      development.
      Now after almost {{ year }} years later I would say loved every part of this journey
      and looking forward to all the mystical adventures awaiting me
    </p>

    <p class=" pb-6">When I'm not coding, I enjoy swimming, playing badminton (emphasis on
      the 'bad') ,
      or I'll binge-watch some anime until my eyes turn into pixels.</p>
  </div>
</template>

<style scoped>

</style>