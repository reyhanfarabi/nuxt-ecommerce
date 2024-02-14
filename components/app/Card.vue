<template>
  <div class="flex flex-col relative h-[20rem] bg-white group">
    <div class="h-64 w-64 p-4 border duration-75 group-hover:border-zinc-950">
      <img
        class="h-full w-full object-contain"
        :src="imageUrl"
        :alt="`${name} product image`"
      />
    </div>
    <h3 class="text-sm font-bold break-words w-52 px-2 mt-2 line-clamp-2">
      {{ props.name }}
    </h3>
    <div
      class="absolute flex justify-center items-center h-16 w-16 left-56 bottom-8 bg-yellow-400 duration-75 group-hover:bg-zinc-950 group-hover:border-zinc-950 group-hover:text-white"
    >
      <span class="text-sm font-semibold">${{ props.price }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});
</script>
