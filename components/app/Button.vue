<template>
  <button
    class="px-4 py-2 border border-zinc-950"
    :class="[
      {
        filled: props.isFilled,
      },
      {
        outlined: !props.isFilled,
      },
    ]"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  isFilled: Boolean,
});
</script>

<style scoped>
.filled {
  @apply text-white bg-zinc-950 hover:bg-zinc-950/60;
}

.outlined {
  @apply text-zinc-950 hover:bg-black hover:text-white;
}
</style>
