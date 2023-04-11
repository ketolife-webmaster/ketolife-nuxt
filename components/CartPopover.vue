<template>
  <div
    class="absolute right-0 z-10 py-1 pb-4 mt-6 origin-top-right bg-white rounded-md shadow-lg sm:px-2 lg:w-80 ring-1 ring-primary ring-opacity-5 focus:outline-none"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    tabindex="-1"
  >
    <h2 class="sr-only">Shopping Cart</h2>
    <form class="max-w-2xl px-4 mx-auto">
      <ul role="list" class="divide-y divide-gray-200">
        <li v-if="cart.length === 0" class="flex items-center justify-center py-6">
          <div class="text-center">
            <svg
              class="w-12 h-12 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vector-effect="non-scaling-stroke"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No products</h3>
            <p class="mt-1 text-sm text-gray-500">
              Get started by adding products.
            </p>
          </div>
        </li>
        <li v-else class="flex items-center py-6">
          <img
            src="https://bf9mpgu8.directus.app/assets/65c69a99-9ea0-4bc8-a0ab-8a91677fff44"
            alt=""
            class="flex-none w-16 h-16 shadow rounded-xl"
          />
          <div class="flex-auto ml-4">
            <h3 class="font-medium text-primary">
              <a href="#">Cheesecake de Arandanos</a>
            </h3>
            <p class="flex items-center justify-between text-xs text-gray-500">
              <span class="text-tertiary">Complete</span>
              <span class="">S./ 168.00</span>
            </p>
          </div>
        </li>

        <!-- More products... -->
      </ul>

      <div v-if="cart.length === 0">
        <nuxt-link to="/shop" class="btn primary">Shop</nuxt-link>
      </div>
      <div v-else>
        <nuxt-link to="/checkout" class="btn primary">Checkout</nuxt-link>

        <p class="mt-3 text-center">
          <nuxt-link
            to="/cart"
            class="text-sm font-medium text-primary hover:text-tertiary"
            >View Shopping Bag</nuxt-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CartPopoverCompoenent',

  computed: {
    ...mapGetters({
      cart: 'cart/getCart',
    }),
  },
}
</script>
