<template>
  <div class="grid laptop:grid-cols-3 place-items-stretch items-center place-content-center gap-y-10 tablet:gap-y-20 px-4 pt-32 tablet:pt-40">
    <div class="flex flex-col gap-y-4 laptop:col-span-2">
      <h1 class="text-2xl tablet:text-4xl desktop:text-5xl text-center laptop:text-left font-semibold max-w-2xl tablet:leading-tight laptop:leading-relaxed desktop:leading-snug mx-auto laptop:mx-0">
        Mi nombre es Alan Ortega y soy
        <div  
          class="relative w-fit inline-block overflow-clip before:absolute before:top-0 before:left-0 before:bg-midnight-blue before:w-full before:h-full before:border-l tablet:before:border-l-2 laptop:before:border-l-4 before:border-cyan before:z-10 before:animate-typing"
        >
          <span class="text-cyan drop-shadow-cyan pr-1 whitespace-nowrap">
            Desarrollador Frontend
          </span>
        </div>
      </h1>
      <p class="text-gray-300 text-xl tablet:text-2xl text-center laptop:text-left max-w-xl mx-auto laptop:mx-0">
        Construyendo experiencias web excepcionales con pasión, creatividad y
        enfoque en el usuario, impulsando la innovación tecnológica.
      </p>
    </div>
    <nuxt-img
      class="w-[250px] tablet:w-[300px] laptop:w-[350px] desktop:w-[400px] laptop:place-self-end rounded-lg tablet:col-span-1 mx-auto laptop:mx-0"
      quality="80"
      src="/computer-dev.webp"
    />
  </div>
</template>
