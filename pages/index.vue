<template>
  <div class="flex flex-col w-full gap-4">
    <h1 class="text-4xl font-semibold">Our Products</h1>
    <div class="flex flex-row justify-end">
      <AppDropdown label="Category" :options="categoriesOptions" />
    </div>
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
import type { IDropdownOptions } from "~/components/app/Dropdown.vue";
import type { IProduct } from "~/types/product";

const config = useRuntimeConfig();

const { data: products } = await useFetch<Array<IProduct>>(
  `${config.public.apiUrl}/products`
);

const { data: categories } = await useFetch<Array<string>>(
  `${config.public.apiUrl}/products/categories`
);

const categoriesOptions: ComputedRef<Array<IDropdownOptions>> = computed(
  (): Array<IDropdownOptions> => [
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
