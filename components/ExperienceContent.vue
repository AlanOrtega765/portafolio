<script setup lang="ts">
interface Experience {
  id: number;
  name: string;
  description: string;
  date: string;
}

const { data: experiences } = useFetch<Experience[]>('/api/experiences');
</script>

<template>
  <div class="relative h-full px-4 laptop:px-0">
    <h2>Experiencia</h2>
    <div
      class="h-full w-full grid tablet:grid-cols-2 gap-x-2 laptop:gap-x-10 gap-y-10 place-items-center pt-24"
    >
      <div
        class="overflow-hidden p-px rounded-xl w-full"
        :class="experience.id < 4 ? 'self-end' : 'self-start'"
        v-for="experience in experiences"
        :key="experience.id"
      >
        <div
          class="relative bg-zinc-900 p-6 rounded-xl h-[160px] desktop:h-[180px] hover:bg-zinc-800 transition-colors duration-300 gradient-border"
        >
          <h3 class="text-lg laptop:text-xl desktop:text-2xl font-semibold">
            {{ experience.name }}
          </h3>
          <p class="laptop:text-lg desktop:text-xl leading-6">
            {{ experience.description }}
          </p>
          <span
            class="block mt-2 italic text-gray-300 laptop:text-lg desktop:text-xl"
            >{{ experience.date }}</span
          >
        </div>
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
  scale: 150%;
  transition: 300ms;
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
