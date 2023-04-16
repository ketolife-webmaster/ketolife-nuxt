<template>
  <li v-if="product">
    <div class="flex py-6 sm:py-10">
      <div class="flex-shrink-0">
        <img
          :src="$tools.image(product?.image)"
          alt="Imágen de portada del carrito"
          class="object-cover object-center w-24 h-24 shadow rounded-xl sm:h-32 sm:w-32"
        />
      </div>

      <div class="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
        <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div class="flex justify-between">
              <h3 class="text-lg">
                <nuxt-link
                  :to="`/tienda/${product?.slug}`"
                  class="font-medium text-primary hover:underline"
                  >{{ product?.name }}</nuxt-link
                >
              </h3>
            </div>
            <div class="flex mt-1 text-sm">
              <p class="text-tertiary">{{ product?.porcion }}</p>
            </div>
            <p class="mt-1 text-sm font-medium text-gray-500">
              {{ currency }} {{ product?.price }}
            </p>
          </div>

          <div class="mt-4 sm:mt-0 sm:pr-9">
            <label for="quantity" class="sr-only">Quantity</label>
            <input
              id="quantity"
              type="number"
              min="1"
              name="quantity"
              :value="product?.qty"
              @change="updateQty({ index, qty: $event.target.value })"
              class="w-20 text-center px-3 py-1.5 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary outline-none focus:ring-2 focus:ring-primary sm:text-sm"
            />

            <div class="absolute top-0 right-0">
              <button
                @click.prevent="removeFromCart(index)"
                type="button"
                class="flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 focus:text-primary"
              >
                <span class="sr-only">Remove</span>
                <!-- Heroicon name: mini/x-mark -->
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartProductListComponent",

  props: {
    product: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  computed: {
    ...mapGetters({
      currency: "getCurrency",
    }),
  },

  methods: {
    ...mapActions({
      updateQty: "cart/updateProductQuantity",
      removeFromCart: "cart/removeFromCart"
    }),
  },
};
</script>
