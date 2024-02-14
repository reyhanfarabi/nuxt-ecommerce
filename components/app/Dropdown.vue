<template>
  <div class="flex flex-row relative items-center gap-2">
    <label class="text-sm" for="category-filter">{{ props.label }}</label>
    <select
      class="bg-white p-1 border border-zinc-500 px-2 w-48"
      name="category-filter"
      id="categoryFilter"
      v-model="selectedOption"
      @change="() => emit('selected', selectedOption)"
    >
      <option v-for="opt in props.options" class="p-2" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
    <Icon
      name="heroicons:chevron-down"
      class="absolute right-2 pointer-events-none"
    />
  </div>
</template>

<script lang="ts" setup>
export interface IDropdownOptions {
  label: string;
  value: string;
}

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array<IDropdownOptions>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "selected", value: string): void;
}>();

const selectedOption = ref("");
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
