<template>
  <li v-if="product" class="flex px-0 py-6">
    <div class="flex-shrink-0">
      <img
        :src="$tools.imgae(product?.image)"
        alt="Front of men&#039;s Basic Tee in black."
        class="w-20 shadow rounded-xl"
      />
    </div>

    <div class="flex flex-col flex-1 ml-6">
      <div class="flex">
        <div class="flex-1 min-w-0">
          <h4 class="text-base">
            <nuxt-link
              :to="`/tienda/${product?.slug}`"
              class="font-medium text-primary hover:text-tertiary hover:underline"
              >{{ product?.name }}</nuxt-link
            >
          </h4>
          <p class="text-sm text-tertiary">{{product?.procion}}</p>
        </div>

        <div class="flex-shrink-0 flow-root ml-4">
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

      <div class="flex items-end justify-between flex-1">
        <p class="text-sm font-medium text-gray-900">
          {{ currency }} {{ product?.price }}
        </p>

        <div class="ml-4">
          <label for="quantity" class="sr-only">Cantidad</label>
          <input
            id="quantity"
            name="quantity"
            :value="product?.qty"
            @change="updateQty({ index, qty: $event.target.value })"
            class="w-full py-1.5 px-3 outline-none focus:ring-2 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CheckoutProductListComponent",

  props: {
    product: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  computed: {
    ...mapGetters({
      currency: "getCurrency",
    }),
  },

  methods: {
    ...mapActions({
      updateQty: "cart/updateProductQuantity",
      removeFromCart: "cart/removeFromCart",
    }),
  },
};
</script>
