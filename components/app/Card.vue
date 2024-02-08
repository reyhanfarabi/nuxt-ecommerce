<template>
  <div
    class="flex flex-col h-[20rem] bg-white border border-gray-200 rounded-md duration-75 hover:shadow-lg"
  >
    <div class="flex justify-center h-36 w-full p-2">
      <img class="h-full" :src="imageUrl" :alt="`${name} product image`" />
    </div>
    <div class="flex flex-col justify-between h-full p-4">
      <div class="flex flex-col h-24 justify-end gap-2">
        <h3 class="text-sm font-bold break-words line-clamp-2">
          {{ props.name }}
        </h3>
        <span class="text-sm break-words line-clamp-2"
          >{{ props.description }}
        </span>
      </div>
      <span class="self-end text-xl font-semibold">${{ props.price }}</span>
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
