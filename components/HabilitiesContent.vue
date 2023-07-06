<script setup lang="ts">
const icons = ref({
  languages: [
    {
      name: 'vscode-icons:file-type-html',
      style: 'top-0 left-1/2 -translate-x-1/2',
    },
    {
      name: 'vscode-icons:file-type-css',
      style: 'top-1/2 -translate-y-1/2 left-0 text-just-white',
    },
    {
      name: 'skill-icons:javascript',
      style: 'top-1/2 -translate-y-1/2 right-0',
    },
    {
      name: 'skill-icons:typescript',
      style: 'bottom-0 left-1/2 -translate-x-1/2',
    },
  ],
  tools: [
    {
      name: 'devicon:vscode',
      style: 'top-0 left-1/2 -translate-x-1/2',
    },
    {
      name: 'cib:github',
      style: 'top-1/2 -translate-y-1/2 -left-0 text-just-white',
    },
    {
      name: 'bi:terminal-fill',
      style: 'top-1/2 -translate-y-1/2 right-0',
    },
    {
      name: 'logos:figma',
      style: 'bottom-0 left-1/2 -translate-x-1/2',
    },
  ],
  frameworks: [
    {
      name: 'logos:vue',
      style: 'top-0 left-1/2 -translate-x-1/2',
    },
    {
      name: 'logos:nuxt-icon',
      style: '-top-8 top-1/2 -translate-y-1/2 left-0',
    },
    {
      name: 'logos:vuetifyjs',
      style: 'top-1/2 -translate-y-1/2 right-0',
    },
    {
      name: 'logos:tailwindcss-icon',
      style: 'bottom-0 left-1/2 -translate-x-1/2',
    },
  ],
});
</script>

<template>
  <div class="relative h-full px-4 laptop:px-0">
    <h2>Habilidades</h2>
    <div class="grid tablet:grid-cols-2 tablet:grid-rows-1 place-items-center w-full h-full pt-24 gap-y-20 tablet:gap-y-10">
      <div
        class="relative flex items-center justify-center w-[300px] h-[300px] laptop:w-[350px] laptop:h-[350px] rounded-full"
      >
        <Icon
          v-for="(icon, i) in icons.languages"
          :key="i"
          class="absolute w-16 h-16 laptop:w-20 laptop:h-20"
          :class="icon.style"
          :name="icon.name"
        />
        <span class="text-xl laptop:text-2xl font-semibold">Lenguajes</span>
      </div>
      <div
        class="relative flex items-center justify-center w-[300px] h-[300px] laptop:w-[350px] laptop:h-[350px] rounded-full"
      >
        <Icon
          v-for="(icon, i) in icons.frameworks"
          :key="i"
          class="absolute w-16 h-16 laptop:w-20 laptop:h-20"
          :class="icon.style"
          :name="icon.name"
        />
        <span class="text-xl laptop:text-2xl font-semibold">Frameworks</span>
      </div>
      <div
        class="relative flex items-center justify-center w-[300px] h-[300px] laptop:w-[350px] laptop:h-[350px] rounded-full tablet:col-span-2"
      >
        <Icon
          v-for="(icon, i) in icons.tools"
          :key="i"
          class="absolute w-16 h-16 laptop:w-20 laptop:h-20"
          :class="icon.style"
          :name="icon.name"
        />

        <span class="text-xl laptop:text-2xl font-semibold">Herramientas</span>
      </div>
    </div>
  </div>
</template>
