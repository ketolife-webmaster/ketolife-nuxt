<template>
  <div class="relative group">
    <div class="overflow-hidden transition-all duration-300 ease-out group-hover:bg-primary bg-gray-50 rounded-2xl aspect-w-2 aspect-h-2 group-hover:shadow-sm">
      <img
        :src="$tools.image(product?.image)"
        :alt="product?.name"
        class="object-cover object-center"
        loading="lazy"
      />
      <div
        class="flex items-start justify-between px-3 py-4 space-x-8 text-base font-medium text-gray-500"
      >
        <h3 class="text-primary group-hover:text-white">
          <nuxt-link :to="`/tienda/${product?.slug}`">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {{ product?.name }}
          </nuxt-link>
        </h3>
        <p class="whitespace-nowrap group-hover:text-white">{{ currency }} {{ product?.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'ProductCardComponent',

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters({
      currency: "getCurrency",
    }),
  },
}
</script>
