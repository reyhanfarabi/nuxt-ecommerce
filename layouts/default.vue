<template>
  <div class="w-screen h-screen flex flex-row">
    <div class="w-[4vw] bg-zinc-950"></div>
    <div class="w-[96vw] flex flex-col">
      <AppHeader />
      <main class="flex flex-grow p-10">
        <slot />
      </main>
    </div>
  </div>
</template>
