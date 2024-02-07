<template>
  <div class="flex flex-col w-full gap-4">
    <h1 class="text-4xl font-semibold">Our Products</h1>
    <div class="grid grid-cols-6 gap-8 h-[74vh] overflow-auto p-4">
      <AppCard
        v-for="product in products"
        :name="product.title"
        :description="product.description"
        :price="product.price"
        :image-url="product.image"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from "~/types/product";

const config = useRuntimeConfig();

const { data: products } = await useFetch<Array<IProduct>>(
  `${config.public.apiUrl}/products`
);
</script>
