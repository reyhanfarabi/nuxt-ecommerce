<template>
  <ul class="flex flex-row gap-2 text-sm">
    <li v-for="(link, index) in props.links" class="flex flex-row gap-2">
      <NuxtLink
        :to="link.to"
        :class="[{ 'font-semibold': index === props.links.length - 1 }]"
      >
        <span>{{ link.label }}</span>
      </NuxtLink>
      <span v-if="index !== props.links.length - 1">/</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
export interface IBreadcrumbItem {
  label: string;
  to?: string;
}

const props = defineProps<{
  links: Array<IBreadcrumbItem>;
}>();
</script>
