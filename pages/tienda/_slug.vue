<template>
  <div class="mt-[120px]">
    <section class="py-16 bg-white">
      <div class="container">
        <p v-if="$fetchState.pending">Buscando productos...</p>
        <p v-else-if="$fetchState.error">Se ha producido un error :(</p>
        <div v-else class="lg:grid lg:grid-cols-2 lg:gap-x-8">
          <!-- Product details -->
          <div class="lg:max-w-lg lg:self-end">
            <!-- <nav aria-label="Breadcrumb">
            <ol role="list" class="flex items-center space-x-2">
              <li>
                <div class="flex items-center text-sm">
                  <a
                    href="#"
                    class="font-medium text-gray-500 hover:text-gray-900"
                    >Travel</a
                  >

                  <svg
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-hidden="true"
                    class="flex-shrink-0 w-5 h-5 ml-2 text-gray-300"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                </div>
              </li>

              <li>
                <div class="flex items-center text-sm">
                  <a
                    href="#"
                    class="font-medium text-gray-500 hover:text-gray-900"
                    >Bags</a
                  >
                </div>
              </li>
            </ol>
          </nav> -->

            <div class="mt-4">
              <h1
                class="text-4xl font-bold tracking-tight text-primary font-amatic sm:text-7xl"
              >
                {{ product?.name }}
              </h1>
            </div>

            <section aria-labelledby="information-heading" class="mt-4">
              <h2 id="information-heading" class="sr-only">
                Información del producto
              </h2>

              <div class="flex items-center">
                <p class="text-lg text-gray-900 sm:text-xl">
                  {{ currency }} {{ product?.price.toFixed(2) }}
                </p>
                <p
                  class="pl-4 ml-4 text-base capitalize border-l border-gray-300 text-tertiary"
                >
                  {{ product?.size }}
                </p>

                <!-- <div class="pl-4 ml-4 border-l border-gray-300">
                <h2 class="sr-only">Reviews</h2>
                <div class="flex items-center">
                  <div>
                    <div class="flex items-center">
                      <!~~
                    Heroicon name: mini/star

                    Active: "text-yellow-400", Default: "text-gray-300"
                  ~~>
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <!~~ Heroicon name: mini/star ~~>
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <!~~ Heroicon name: mini/star ~~>
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <!~~ Heroicon name: mini/star ~~>
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <!~~ Heroicon name: mini/star ~~>
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <p class="sr-only">4 out of 5 stars</p>
                  </div>
                  <p class="ml-2 text-sm text-gray-500">1624 reviews</p>
                </div>
              </div> -->
              </div>

              <div class="mt-4 space-y-6">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="text-base text-gray-500" v-html="product?.description" />
              </div>

              <div class="flex items-center mt-6">
                <!-- Heroicon name: mini/check -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="ml-2 text-sm text-primary">
                  {{ product?.availability }}
                  <!-- Avability -->
                </p>
              </div>
            </section>
          </div>

          <!-- Product image -->
          <div
            class="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center"
          >
            <div class="overflow-hidden rounded- aspect-w-1 aspect-h-1">
              <img
                :src="`${$config.apiURL}/assets/${product?.image}`"
                :alt="product?.name"
                class="object-cover object-center shadow-2xl pointer-events-none rounded-3xl"
              />
            </div>
          </div>

          <!-- Product form -->
          <div
            class="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start"
          >
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" class="sr-only">Opciones de productos</h2>

              <form>
                <div class="sm:flex sm:justify-between">
                  <!-- Size selector -->
                  <fieldset>
                    <legend class="block text-sm font-medium text-black">
                      Cantidad
                    </legend>
                    <div class="grid grid-cols-1 gap-4 mt-1 sm:grid-cols-2">
                      <!-- Active: "ring-2 ring-indigo-500" -->
                      <div
                        class="relative flex items-center space-x-4 cursor-pointer focus:outline-none"
                      >
                        <!-- <button class="btn secondary">-</button> -->
                        <input
                          id="quantity"
                          value="1"
                          type="number"
                          min="1"
                          v-model="qty"
                          class="w-auto py-1.5 px-3 focus:ring-2 ring-primary outline-none text-center bg-white border-gray-300 rounded-md shadow-sm appearance-none lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-lg"
                        />
                        <!-- <button class="btn secondary">+</button> -->
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="mt-10">
                  <button
                    type="submit"
                    class="btn primary"
                    @click.prevent="addToCart({product, qty}); qty = 1"
                  >
                    Agregar al carrito
                  </button>
                </div>

                <div class="mt-6 text-center">
                  <nuxt-link
                    to="/tienda"
                    class="inline-flex text-base font-medium group"
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 mr-2 text-gray-400 group-hover:text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                      />
                    </svg>
                    <span class="text-gray-500 hover:text-gray-700"
                      >Continuar comprando</span
                    >
                  </nuxt-link>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </section>

    <SectionHighlightProducts />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SingleProductPage',

  data() {
    return {
      product: null,
      qty: 1
    }
  },

  async fetch() {
    const products = await this.$calls.items({
      collection: 'products',
      filter: {
        status: {
          _eq: 'published',
        },
        slug: {
          _eq: this.$route.params.slug,
        },
      },
    })

    this.product = products?.data?.[0]
    // TODO: on 404, redirects
  },

  computed: {
    ...mapGetters({
      currency: 'getCurrency'
    })
  },

  methods: {
    ...mapActions({
      addToCart: 'cart/addToCart',
    }),
  },
}
</script>
