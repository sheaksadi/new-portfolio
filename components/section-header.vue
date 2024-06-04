<script setup lang="ts">
const props = defineProps({
  selected: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: "blank-title"
  },
  id: {
    type: String,
    default: "blank-id"
  }
});

let getLineStyle = computed(() => {
  return props.selected ? "w-24 bg-white" : "w-16 bg-gray-500";
});
let getColor = computed(() => {
  return props.selected ? "text-white" : "text-gray-500";
});


</script>

<template>
  <div
      :class="getColor"
      class="flex h-12 w-48 cursor-pointer select-none items-center transition-all duration-400"  >

    <div :class="getLineStyle" class="transition-all duration-500 h-[0.10rem]"></div>
    <h1 class="mx-3 text-xs font-bold">{{props.title.toUpperCase()}}</h1>

  </div>
</template>

<style scoped>

</style>
