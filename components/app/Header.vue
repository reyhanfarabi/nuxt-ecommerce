<template>
  <header class="flex flex-row w-full justify-between px-10">
    <ul class="flex flex-row items-center gap-8">
      <li><NuxtLink class="nav-link active" to="#"> All </NuxtLink></li>
      <li><NuxtLink class="nav-link" to="#"> Electronics </NuxtLink></li>
      <li><NuxtLink class="nav-link" to="#"> Jewelry </NuxtLink></li>
      <li><NuxtLink class="nav-link" to="#"> Men's Clothing </NuxtLink></li>
      <li><NuxtLink class="nav-link" to="#"> Women's Clothing </NuxtLink></li>
    </ul>
    <h1 class="px-8 py-6 text-white bg-zinc-950">E-Commerce</h1>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.nav-link {
  @apply text-zinc-600 hover:text-black;
}

.active {
  @apply text-black underline underline-offset-8;
}
</style>
