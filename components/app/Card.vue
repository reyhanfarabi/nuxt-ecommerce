<template>
  <v-card class="mx-auto" max-width="400" hover>
    <v-img height="140" :src="props.imageUrl" />

    <v-card-title class="text-wrap"
      ><h1 class="line-clamp-2 font-bold text-sm h-10">
        {{ props.name }}
      </h1></v-card-title
    >

    <v-card-text class="flex flex-col gap-4">
      <p class="line-clamp-2">{{ props.description }}</p>
      <span class="self-end text-lg font-bold">${{ props.price }}</span>
    </v-card-text>
  </v-card>
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
