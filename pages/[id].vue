<template>
  <Title>{{ `${product?.title} - Product Detail` || "Product Detail" }}</Title>
  <div class="flex flex-col items-center w-full">
    <div class="flex flex-col container gap-4 px-36">
      <AppBreadcrumb :links="breadcrumbLinks" />
      <div class="flex flex-row gap-10">
        <div
          class="flex justify-center items-center h-96 w-96 p-4 border border-gray-200 rounded-md"
        >
          <img
            class="h-full w-full object-contain"
            :src="product?.image"
            :alt="`${product?.title} product image`"
          />
        </div>
        <div class="flex flex-1 flex-col gap-2">
          <span class="text-lg">{{
            toCapitalize(product?.category || "")
          }}</span>
          <div class="flex flex-col gap-4">
            <h1 class="text-4xl">{{ product?.title }}</h1>
            <span
              >{{ product?.rating.rate.toFixed(1) }} ({{
                product?.rating.count
              }}
              ratings)</span
            >
            <span class="text-2xl font-bold">${{ product?.price }}</span>
            <div
              class="flex flex-col gap-2 border-t border-b border-zinc-950 py-4"
            >
              <label class="text-sm font-bold" for="description-box"
                >Description</label
              >
              <p name="description-box">{{ product?.description }}</p>
            </div>
          </div>
          <div class="flex justify-between items-end h-full pt-8">
            <AppButton @click="() => navigateTo('/')"> &larr; Back </AppButton>
            <div class="flex flex-row gap-4">
              <AppButton>Add to Cart</AppButton>
              <AppButton>Buy</AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IBreadcrumbItem } from "~/components/app/Breadcrumb.vue";
import type { IProduct } from "~/types/product";

const config = useRuntimeConfig();
const route = useRoute();

const { data: product } = await useFetch<IProduct>(
  `${config.public.apiUrl}/products/${route.params.id}`
);

const breadcrumbLinks: Array<IBreadcrumbItem> = [
  { label: "Products", to: "/" },
  { label: product.value?.title || "" },
];
</script>
