<template>
  <NuxtLoadingIndicator />
  <div class="w-screen h-screen flex flex-row">
    <div class="w-[4vw] bg-zinc-950"></div>
    <div class="w-[96vw] flex flex-col">
      <AppHeader />
      <main class="flex flex-grow px-10 py-4">
        <slot />
      </main>
    </div>
  </div>
</template>
