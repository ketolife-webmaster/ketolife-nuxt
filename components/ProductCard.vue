<template>
  <div class="relative group">
    <div class="overflow-hidden bg-gray-100 rounded-2xl aspect-w-2 aspect-h-2">
      <img
        :src="`${$config.apiURL}/assets/${product?.image}`"
        :alt="product?.name"
        class="object-cover object-center"
        loading="lazy"
      />
      <div
        class="flex items-end p-4 opacity-0 group-hover:opacity-100"
        aria-hidden="true"
      >
        <div
          class="w-full px-4 py-2 text-sm font-medium text-center bg-white bg-opacity-75 rounded-md text-primary backdrop-blur backdrop-filter"
        >
          View Product
        </div>
      </div>
    </div>
    <div
      class="flex items-start justify-between mt-4 space-x-8 text-base font-medium text-gray-500"
    >
      <h3 class="text-primary">
        <nuxt-link :to="`/shop/${product?.slug}`">
          <span aria-hidden="true" class="absolute inset-0"></span>
          {{ product?.name }}
        </nuxt-link>
      </h3>
      <p class="whitespace-nowrap">S/. {{ product?.price }}</p>
    </div>
    <!-- <p class="text-sm capitalize text-tertiary">{{ product?.size }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'ProductCardComponent',

  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
