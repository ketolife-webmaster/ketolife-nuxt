<template>
  <div class="relative pb-12 bg-gray-100 pt-[120px] overflow-hidden">
    <div v-if="backgroundImage" class="absolute inset-0">
      <img :src="`/${backgroundImage}`" alt="" class="object-cover object-center w-full h-full" />
    </div>
    <div class="container relative">
      <h1
        class="text-4xl font-bold tracking-tight text-center text-primary sm:text-7xl font-amatic"
      >
        {{ title }}
      </h1>

      <span
        v-if="text"
        v-animate-on-scroll="{ type: 'fadeInUp', delay: 1 }"
        class="divide center primary"
      ></span>

      <div
        v-if="text"
        v-animate-on-scroll="{ type: 'fadeInUp' }"
        class="mx-auto text-xl italic text-center lg:max-w-3xl"
      >
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InnerPageTittleComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
    backgroundImage: {
      type: String,
      required: false,
      default: ''
    }
  },
}
</script>
