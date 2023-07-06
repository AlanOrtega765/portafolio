<script setup lang="ts">
const projects = ref([
  {
    id: 1,
    title: 'Movies Hub',
    description:
      '¡Bienvenido a mi página web de información cinematográfica! Aquí encontrarás un ejemplo destacado de mi habilidad para integrar la API de The Movie DB y crear una plataforma completa y funcional dedicada a películas, series y personas del mundo del entretenimiento.',
    image_path: '/images/movies-hub.png',
    page_url: 'https://movies-hub-765.netlify.app/',
    icons: [
      {
        id: 1,
        name: 'logos:vue',
      },
      {
        id: 2,
        name: 'logos:nuxt-icon',
      },
      {
        id: 3,
        name: 'logos:tailwindcss-icon',
      },
    ],
  },
  {
    id: 2,
    title: 'Batatabit',
    description:
      'Batatabit es una plataforma de criptomonedas diseñada para inversores y entusiastas que desean aprender, explorar y participar en el emocionante mundo de las criptomonedas. He creado una representación personalizada de Batatabit, donde puedes obtener una idea clara de su propósito y funcionalidad.',
    image_path: '/images/batatabit.png',
    page_url: 'https://alanortega765.github.io/batatabit-app/',
    icons: [
      {
        id: 1,
        name: 'logos:vue',
      },
      {
        id: 2,
        name: 'logos:tailwindcss-icon',
      },
    ],
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, consequuntur repellat fuga veritatis ex a sint assumenda deleniti corrupti magnam porro consequatur accusantium similique aut molestiae repellendus minus reiciendis eligendi.',
    image_path: '/images/bg-gray.png',
    page_url: '#',
    icons: [],
  },
  {
    id: 4,
    title: 'Proyecto 4',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, consequuntur repellat fuga veritatis ex a sint assumenda deleniti corrupti magnam porro consequatur accusantium similique aut molestiae repellendus minus reiciendis eligendi.',
    image_path: '/images/bg-gray.png',
    page_url: '#',
    icons: [],
  },
  {
    id: 5,
    title: 'Proyecto 5',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, consequuntur repellat fuga veritatis ex a sint assumenda deleniti corrupti magnam porro consequatur accusantium similique aut molestiae repellendus minus reiciendis eligendi.',
    image_path: '/images/bg-gray.png',
    page_url: '#',
    icons: [],
  },
  {
    id: 6,
    title: 'Proyecto 6',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, consequuntur repellat fuga veritatis ex a sint assumenda deleniti corrupti magnam porro consequatur accusantium similique aut molestiae repellendus minus reiciendis eligendi.',
    image_path: '/images/bg-gray.png',
    page_url: '#',
    icons: [],
  },
]);
const swiperRef = ref();
const loading = ref(false);
const swiperBreakpoints = {
  320: {
    slidesPerView: 1.3,
    slidesPerGroup: 1,
    centeredSlides: true,
  },
  640: {
    slidesPerView: 1.9,
    centeredSlides: true,
  },
  1024: {
    slidesPerView: 2.5,
    centeredSlides: false,
    allowTouchMove: false,
  },
  1280: {
    slidesPerView: 3,
    centeredSlides: false,
    allowTouchMove: false,
  },
};

const slidePrev = () => {
  swiperRef.value.$el.swiper.slidePrev();
};
const slideNext = () => {
  swiperRef.value.$el.swiper.slideNext();
};

onMounted(() => {
  loading.value = true;
});
</script>

<template>
  <div class="flex flex-col px-4 laptop:px-0">
    <h2>Mis Proyectos</h2>
    <div class="pt-24">
      <div v-if="loading" class="relative">
        <Swiper
          ref="swiperRef"
          class="relative w-full h-[400px] tablet:h-[500px]"
          :breakpoints="swiperBreakpoints"
          :space-between="20"
          :loop="true"
        >
          <SwiperSlide
            class="overflow-hidden p-px rounded-xl h-full"
            v-for="project in projects"
            :key="project.id"
          >
            <NuxtLink
              :href="project.page_url"
              target="_blank"
              class="relative block bg-zinc-900 h-full rounded-xl laptop:hover:bg-zinc-800 transition-colors duration-300 gradient-border cursor-pointer"
            >
              <nuxt-img
                class="rounded-t-md"
                :src="project.image_path"
                format="webp"
                quality="80"
              />
              <article class="flex flex-col gap-y-4 p-4">
                <div class="flex items-center gap-x-4">
                  <h3 class="text-lg tablet:text-xl font-semibold">
                    {{ project.title }}
                  </h3>
                  <ul class="flex gap-x-4">
                    <li
                      v-for="icon in project.icons"
                      :key="icon.id"
                      class="flex items-center"
                    >
                      <Icon
                        class="w-4 h-4 tablet:w-6 tablet:h-6"
                        :name="icon.name"
                      />
                    </li>
                  </ul>
                </div>
                <p class="text-sm tablet:text-base text-gray-300 leading-tight">
                  {{ project.description }}
                </p>
              </article>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
        <button
          class="hidden laptop:block absolute top-1/2 -translate-y-1/2 -left-[100px] opacity-80 hover:opacity-100 transition-opacity"
          @click="slidePrev"
        >
          <Icon name="icons8:chevron-left-round" size="60" />
        </button>
        <button
          class="hidden laptop:block absolute top-1/2 -translate-y-1/2 -right-[100px] opacity-80 hover:opacity-100 transition-opacity"
          @click="slideNext"
        >
          <Icon name="icons8:chevron-right-round" size="60" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-border:hover::before {
  opacity: 1;
  animation: gradient 6s linear infinite;
}
.gradient-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background: linear-gradient(
    360deg,
    hsla(0, 0%, 100%, 0.5),
    hsla(0, 0%, 100%, 0.1),
    #fff,
    hsla(0, 0%, 100%, 0.3)
  );
  border-radius: 12px;
  transform: translate(-1px, -1px);
  opacity: 0;
  transition: 300ms;
  scale: 170%;
  z-index: -1;
}

@keyframes gradient {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1turn);
  }
}
</style>
