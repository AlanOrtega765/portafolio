<script setup lang="ts">
const experiences = ref([
  {
    id: 1,
    name: 'Pedidos Ya',
    description: 'Repartidor de Comida, Arica.',
    date: '(ene. 2021 - jul. 2021)',
  },
  {
    id: 2,
    name: 'Hospital Dr. Juan Noé Crevani, Arica',
    description: 'Suplente Administrativo Movilización.',
    date: '(13 al 27 de feb.)',
  },
  {
    id: 3,
    name: 'Junaeb, Arica',
    description:
      'Practicante administrativo de formularios postulantes becas y atención al cliente.',
    date: '(mar. 2015 - dic. 2015)',
  },
  {
    id: 4,
    name: 'Tienda Romech, Arica',
    description: 'Practicante administrativo de facturas de ventas.',
    date: '(mar. 2016 - jun. 2016)',
  },
  {
    id: 5,
    name: 'Tienda París, Arica',
    description: 'Practicante reponedor y atención al cliente en juguetería.',
    date: '(ago. 2016 - dic. 2016)',
  },
  {
    id: 6,
    name: 'Aduana, Arica',
    description: 'Practicante desarrollador sistema de control de almacenes.',
    date: '(ene. 2023 - feb. 2023)',
  },
]);
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
