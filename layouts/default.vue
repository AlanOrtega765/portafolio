<script setup lang="ts">
import { openSync } from 'fs';

const links = ref([
  { name: 'Inicio', id: 'home' },
  { name: 'Sobre mi', id: 'about' },
  { name: 'Habilidades', id: 'habilities' },
  { name: 'Proyectos', id: 'projects' },
  { name: 'Experiencia', id: 'experience' },
  { name: 'Educación', id: 'education' },
]);
const open = ref(false);

const scrollTo = (id: string) => {
  open.value = false;
  const element = document.getElementById(id);
  window.scrollTo({
    top: element?.offsetTop,
    behavior: 'smooth',
  });
};
</script>

<template>
  <header
    class="fixed top-0 left-0 z-30 w-full h-20 backdrop-blur-md bg-midnight-blue/60"
  >
    <div
      class="flex justify-between px-4 items-center laptop:w-[90%] desktop:w-[70%] large-desktop:w-[60%] laptop:mx-auto"
    >
      <NuxtLink @click="scrollTo('home')">
        <nuxt-img class="py-1 w-[55px]" format="webp" src="/images/chinchilla.webp" />
      </NuxtLink>
      <span class="text-2xl font-bold laptop:hidden">Mi Portfolio</span>
      <nav
        class="absolute top-0 left-0 w-full px-4 -translate-y-full opacity-0 bg-midnight-blue laptop:bg-transparent shadow-md shadow-black laptop:shadow-none pb-4 laptop:p-0 transition-transform laptop:relative"
        :class="
          open
            ? 'translate-y-0 opacity-100 top-20'
            : 'laptop:opacity-100 laptop:translate-y-0'
        "
      >
        <ul
          class="flex flex-col w-full laptop:flex-row laptop:items-center laptop:gap-x-4 laptop:ml-10 text-center"
        >
          <li v-for="(link, i) in links" :key="i">
            <NuxtLink
              class="block font-bold laptop:text-gray-300 py-2 text-xl laptop:px-4 rounded-md laptop:text-base laptop:hover:bg-zinc-900 laptop:hover:text-just-white transition-colors cursor-pointer"
              @click="scrollTo(link.id)"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="laptop:hidden">
        <Icon
          v-if="!open"
          @click="open = true"
          class="text-3xl"
          name="iconamoon:menu-burger-horizontal"
        />
        <Icon v-else class="text-3xl" name="maki:cross" @click="open = false" />
      </div>
    </div>
  </header>
  <main>
    <slot />
  </main>
  <footer class="bg-zinc-900 py-10 mt-24">
    <div class="grid tablet:grid-cols-2 desktop:w-[60%] place-items-center mx-auto">
      <h3 class="text-2xl font-semibold">Contáctame</h3>
      <ul class="flex flex-col gap-y-5 mt-10 tablet:mt-0">
        <li class="flex items-center gap-x-2">
          <Icon class="w-6 h-6" name="cib:github" />
          <NuxtLink class="font-semibold" to="https://github.com/AlanOrtega765" target="_blank"
            >https://github.com/AlanOrtega765</NuxtLink
          >
        </li>
        <li class="flex items-center gap-x-2">
          <Icon class="w-6 h-6" name="logos:google-gmail" />
          <span class="font-semibold">alanortega.frontend@gmail.com</span>
        </li>
      </ul>
    </div>
  </footer>
</template>
