<script setup lang="ts">
const show = ref(false);
const activeImage = ref('');
const images = ref([
  '/images/certificado-curso-ajax-ws.png',
  '/images/certificado-curso-javascript.png',
  '/images/certificado-curso-js-dom.png',
  '/images/certificado-curso-js-poo.png',
  '/images/certificado-curso-sass.png',
  '/images/certificado-curso-vue.png',
]);

const showImage = (image: string) => {
  activeImage.value = image;
  show.value = true;
};
</script>

<template>
  <div class="relative h-full px-4 laptop:px-0">
    <h2>Educación</h2>
    <div class="w-full h-full grid tablet:grid-cols-2 laptop:grid-cols-3 gap-y-10 gap-x-5 place-items-center pt-24">
      <nuxt-img
        class="cursor-pointer rounded-lg laptop:hover:scale-105 transition-transform"
        :class="i < 3 ? 'self-end' : 'self-start'"
        v-for="(image, i) in images"
        @click="showImage(image)"
        :key="i"
        :src="image"
        format="webp"
      />
    </div>
  </div>
  <div
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 z-30"
    v-if="show"
  >
    <nuxt-img class="w-[90%] laptop:w-1/2 rounded-lg" :src="activeImage" format="webp" />
    <Icon
      class="absolute top-5 right-5 w-10 h-10 cursor-pointer"
      @click="show = false"
      name="fa6-solid:xmark"
    />
  </div>
</template>
