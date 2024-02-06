<template>
  <div class="flex flex-col w-full gap-4">
    <h1 class="text-4xl font-semibold">Our Products</h1>
    <div class="grid grid-cols-6 gap-8 h-[74vh] overflow-auto p-4">
      <AppCard
        v-for="_ in 10"
        name="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        description="Your perfect pack for everyday use and walks in the forest. Stash your
        laptop (up to 15 inches) in the padded sleeve, your everyday"
        price="109.95"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
