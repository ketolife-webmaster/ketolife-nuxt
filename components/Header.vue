<template>
  <nav
    class="absolute inset-x-0 top-0 z-10 transition-all duration-300 ease-in-out bg-white shadow"
  >
    <div class="container">
      <div class="flex justify-between h-20">
        <div class="flex px-2 lg:px-0">
          <div class="flex items-center flex-shrink-0">
            <!-- <BrandIcon class="w-auto h-10 lg:hidden" /> -->
            <a href="/">
              <LogoHorizontal class="w-auto h-16" />
            </a>
          </div>
        </div>
        <!-- <div
          class="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end"
        >
        </div> -->
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click.prevent="mobileStatus = !mobileStatus"
          >
            <span class="sr-only">Abrir menu principal</span>
            <svg
              class="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                v-if="!mobileStatus"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:ml-4 lg:flex lg:items-center">
          <div class="flex justify-between h-20">
            <div class="lg:flex lg:space-x-8">
              <!-- Current: "border-primary text-gray-900", Default: "border-transparent text-gray-500 hover:border-tertiary hover:text-gray-700" -->
              <!-- <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-base font-medium uppercase border-b-2 text-primary border-primary"
                >Dashboard</a
              > -->
              <nuxt-link
                v-for="(item, index) in menu"
                :key="index"
                :to="item.slug"
                class="inline-flex items-center px-1 pt-1 text-base font-medium tracking-wider text-gray-500 uppercase border-b-2 border-transparent font-montserrat font-base hover:border-tertiary hover:text-tertiary"
                >{{ item.text }}</nuxt-link
              >
            </div>
          </div>

          <!-- Search -->
          <div class="relative flex-shrink-0 hidden ml-12">
            <div>
              <button
                type="button"
                class="flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 focus:text-primary"
                @click.prevent="searchStatus = !searchStatus"
              >
                <span class="sr-only">Search</span>
                <svg
                  class="w-6 h-6"
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>

            <transition
              v-if="searchStatus"
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div
                class="absolute right-0 z-10 w-auto mt-6 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <div class="max-w-lg lg:max-w-sm w-72">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative">
                    <input
                      id="search"
                      name="search"
                      class="block w-full px-3 py-2 pr-5 leading-5 bg-white rounded-md placeholder-tertiary focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-base"
                      placeholder="Buscar"
                      type="search"
                    />

                    <button
                      class="absolute inset-y-0 right-0 flex items-center pr-3"
                      @click.prevent="searchStatus = false"
                    >
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Cart -->
          <div class="relative flex-shrink-0 ml-8">
            <div>
              <button
                type="button"
                class="flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 focus:text-primary"
                @click.prevent="cartStatus = !cartStatus"
              >
                <span class="sr-only">Carrito de compra</span>
                <!-- Heroicon name: outline/bell -->
                <svg
                  class="w-6 h-6"
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>
              <transition
                v-if="cartStatus"
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <CartPopover />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="mobileStatus" id="mobile-menu" class="lg:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "bg-indigo-50 border-primary text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-tertiary hover:text-gray-800" -->
        <!-- <a
          href="#"
          class="block py-2 pl-3 pr-4 text-base font-medium uppercase border-l-4 text-primary border-primary bg-primary/5"
          >Dashboard</a
        > -->
        <nuxt-link
          v-for="(item, index) in menu"
          :key="index"
          :to="item.slug"
          class="block py-2 pl-3 pr-4 text-base font-medium text-gray-400 uppercase border-l-4 border-transparent hover:border-tertiary hover:bg-gray-50 hover:text-tertiary"
          >{{ item.text }}</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',

  data() {
    return {
      searchStatus: false,
      cartStatus: false,
      mobileStatus: false,

      menu: [
        {
          text: 'Inicio',
          slug: '/',
        },
        {
          text: 'Tienda',
          slug: '/tienda',
        },
      ],
    }
  },
}
</script>
