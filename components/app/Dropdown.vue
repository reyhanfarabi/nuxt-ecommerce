<template>
  <div class="flex flex-row items-center gap-2">
    <label class="text-sm" for="category-filter">{{ props.label }}</label>
    <select
      class="bg-zinc-100 p-1 rounded border border-zinc-500"
      name="category-filter"
      id="categoryFilter"
      v-model="selectedOption"
      @change="() => emit('selected', selectedOption)"
    >
      <option v-for="opt in props.options" class="p-2" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
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
