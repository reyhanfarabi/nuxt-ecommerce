<template>
  <Title>Our Products | E-Commerce</Title>
  <div class="flex flex-col w-full gap-4">
    <h1 class="text-4xl font-semibold">Our Products</h1>
    <div class="flex flex-row justify-end">
      <AppDropdown
        label="Category"
        :options="categoriesOptions"
        @selected="setSelectedCategory"
      />
    </div>
    <div v-if="pending" class="flex justify-center items-center h-[74vh]">
      <span>Loading...</span>
    </div>
    <div
      v-else
      class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 h-[74vh] overflow-auto p-4"
    >
      <NuxtLink v-for="product in products" :to="`/${product.id}`">
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
import type { IDropdownOptions } from "~/components/app/Dropdown.vue";
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

const setSelectedCategory = (value: string): void => {
  currentCategory.value = value;
  refresh();
};
</script>
