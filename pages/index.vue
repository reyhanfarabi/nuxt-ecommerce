<template>
  <Title>Our Products | E-Commerce</Title>
  <div class="flex flex-col w-full gap-4">
    <h1 class="text-4xl font-semibold">Our Products</h1>
    <div class="flex flex-row justify-end">
      <div class="flex w-60">
        <v-select
          label="Category"
          :items="categoriesOptions"
          item-title="label"
          width="100px"
          item-value="value"
          density="compact"
          v-model="currentCategory"
          @update:model-value="() => refresh()"
        ></v-select>
      </div>
    </div>
    <div v-if="pending" class="flex justify-center items-center h-[70vh]">
      <span>Loading...</span>
    </div>
    <div v-else class="grid grid-cols-6 gap-8 h-[70vh] overflow-auto p-4">
      <NuxtLink
        class="h-fit w-fit"
        v-for="product in products"
        :to="`/${product.id}`"
      >
        <AppCard
          :name="product.title"
          :description="product.description"
          :price="product.price"
          :image-url="product.image"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from "~/types/product";

const config = useRuntimeConfig();
const currentCategory = ref("");

const {
  data: products,
  pending,
  refresh,
} = await useFetch<Array<IProduct>>(
  () =>
    `${config.public.apiUrl}/products${
      currentCategory.value ? `/category/${currentCategory.value}` : ""
    }`
);

const { data: categories } = await useFetch<Array<string>>(
  `${config.public.apiUrl}/products/categories`
);

const categoriesOptions: ComputedRef<Array<{ label: string; value: string }>> =
  computed(
    (): Array<{ label: string; value: string }> => [
      { label: "All", value: "" },
      ...(categories.value
        ? categories.value.map((category) => ({
            label: toCapitalize(category),
            value: category,
          }))
        : []),
    ]
  );
</script>
