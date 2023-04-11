<template>
  <section id="filters-box">
    <!--
    Mobile filter dialog

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->
    <div
      v-if="offcanvasStatus"
      class="relative z-40 sm:hidden"
      role="dialog"
      aria-modal="true"
    >
      <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.
      -->
      <transition
        v-if="offcanvasStatus"
        enter-active-class="transition-opacity duration-300 ease-linear"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-linear"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>
      </transition>

      <div class="fixed inset-0 z-40 flex">
        <transition
          v-if="offcanvasStatus"
          enter-active-class="transition duration-300 ease-in-out transform"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition duration-300 ease-in-out transform"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div
            class="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl"
          >
            <div class="flex items-center justify-between px-4">
              <h2 class="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                class="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                @click.prevent="offcanvasStatus = false"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x-mark -->
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <!-- Filters -->
            <form class="mt-4 overflow-auto">
              <!-- Category -->
              <div class="px-4 py-6 border-t border-gray-200">
                <h3 class="flow-root -mx-2 -my-3">
                  <!-- Expand/collapse question button -->
                  <button
                    type="button"
                    class="flex items-center justify-between w-full px-2 py-3 text-sm text-gray-400 bg-white"
                    aria-controls="filter-section-0"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">Category</span>
                  </button>
                </h3>
                <div id="filter-section-0" class="pt-6">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-0"
                        name="category[]"
                        value="tees"
                        type="checkbox"
                        class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                      />
                      <label
                        for="filter-mobile-category-0"
                        class="ml-3 text-sm text-gray-500"
                        >Tees</label
                      >
                    </div>

                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-1"
                        name="category[]"
                        value="crewnecks"
                        type="checkbox"
                        class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                      />
                      <label
                        for="filter-mobile-category-1"
                        class="ml-3 text-sm text-gray-500"
                        >Crewnecks</label
                      >
                    </div>

                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-2"
                        name="category[]"
                        value="hats"
                        type="checkbox"
                        class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                      />
                      <label
                        for="filter-mobile-category-2"
                        class="ml-3 text-sm text-gray-500"
                        >Hats</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- Size -->
              <div class="px-4 py-6 border-t border-gray-200">
                <h3 class="flow-root -mx-2 -my-3">
                  <!-- Expand/collapse question button -->
                  <button
                    type="button"
                    class="flex items-center justify-between w-full px-2 py-3 text-sm text-gray-400 bg-white"
                    aria-controls="filter-section-3"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">Sizes</span>
                  </button>
                </h3>
                <div id="filter-section-3" class="pt-6">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-sizes-0"
                        name="sizes[]"
                        value="s"
                        type="checkbox"
                        class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                      />
                      <label
                        for="filter-mobile-sizes-0"
                        class="ml-3 text-sm text-gray-500"
                        >S</label
                      >
                    </div>

                    <div class="flex items-center">
                      <input
                        id="filter-mobile-sizes-1"
                        name="sizes[]"
                        value="m"
                        type="checkbox"
                        class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                      />
                      <label
                        for="filter-mobile-sizes-1"
                        class="ml-3 text-sm text-gray-500"
                        >M</label
                      >
                    </div>

                    <div class="flex items-center">
                      <input
                        id="filter-mobile-sizes-2"
                        name="sizes[]"
                        value="l"
                        type="checkbox"
                        class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                      />
                      <label
                        for="filter-mobile-sizes-2"
                        class="ml-3 text-sm text-gray-500"
                        >L</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </transition>
      </div>
    </div>

    <!-- Filters -->
    <section
      aria-labelledby="filter-heading"
      class="w-full p-6 bg-gray-100 shadow rounded-3xl"
    >
      <h2 id="filter-heading" class="sr-only">Product filters</h2>

      <div class="flex items-center justify-between">
        <!-- Sort -->
        <div class="relative inline-block text-left">
          <div>
            <button
              id="mobile-menu-button"
              type="button"
              class="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900"
              aria-expanded="false"
              aria-haspopup="true"
              @click.prevent="sortStatus = !sortStatus"
            >
              Sort
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          <transition
            v-if="sortStatus"
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div
              class="absolute left-0 z-10 w-40 mt-2 origin-top-left bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <button
                  class="block px-4 py-2 text-sm font-medium text-gray-900"
                  role="menuitem"
                  tabindex="-1"
                  @click.prevent="
                    filters.sort = '-price'
                    sortStatus = false
                  "
                >
                  Lowest price
                </button>
                <button
                  class="block px-4 py-2 text-sm font-medium text-gray-900"
                  role="menuitem"
                  tabindex="-1"
                  @click.prevent="
                    filters.sort = 'price'
                    sortStatus = false
                  "
                >
                  Higher price
                </button>
              </div>
            </div>
          </transition>
        </div>

        <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
        <button
          type="button"
          class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
          @click.prevent="offcanvasStatus = !offcanvasStatus"
        >
          Filters
        </button>

        <div class="hidden sm:flex sm:items-baseline sm:space-x-8">
          <!-- Category -->
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex items-center justify-center text-sm font-medium text-gray-700 group hover:text-gray-900"
                aria-expanded="false"
                @click.prevent="categoryStatus = !categoryStatus"
              >
                <span>Category</span>

                <!-- <span
                  class="ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700"
                  >1</span
                > -->
                <!-- Heroicon name: mini/chevron-down -->
                <svg
                  class="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <transition
              v-if="categoryStatus"
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div
                class="absolute right-0 z-10 p-4 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <form class="space-y-4">
                  <label class="flex items-center" for="filter-category-0">
                    <input
                      id="filter-category-0"
                      name="category[]"
                      value="desserts"
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                    />
                    <span
                      class="pr-6 ml-3 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >Desserts</span
                    >
                  </label>

                  <div class="flex items-center">
                    <input
                      id="filter-category-1"
                      name="category[]"
                      value="supplies"
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                    />
                    <label
                      for="filter-category-1"
                      class="pr-6 ml-3 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >Supplies</label
                    >
                  </div>

                  <div class="flex items-center">
                    <input
                      id="filter-category-2"
                      name="category[]"
                      value="bakery"
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                    />
                    <label
                      for="filter-category-2"
                      class="pr-6 ml-3 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >Bakery</label
                    >
                  </div>
                </form>
              </div>
            </transition>
          </div>

          <!-- Size -->
          <!-- <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex items-center justify-center text-sm font-medium text-gray-700 group hover:text-gray-900"
                aria-expanded="false"
                @click.prevent="sizeStatus = !sizeStatus"
              >
                <span>Sizes</span>
                <!~~ Heroicon name: mini/chevron-down ~~>
                <svg
                  class="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <transition
              v-if="sizeStatus"
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div
                class="absolute right-0 z-10 p-4 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <form class="space-y-4">
                  <div class="flex items-center">
                    <input
                      id="filter-sizes-0"
                      name="sizes[]"
                      value="s"
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                    />
                    <label
                      for="filter-sizes-0"
                      class="pr-6 ml-3 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >S</label
                    >
                  </div>

                  <div class="flex items-center">
                    <input
                      id="filter-sizes-1"
                      name="sizes[]"
                      value="m"
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                    />
                    <label
                      for="filter-sizes-1"
                      class="pr-6 ml-3 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >M</label
                    >
                  </div>

                  <div class="flex items-center">
                    <input
                      id="filter-sizes-2"
                      name="sizes[]"
                      value="l"
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                    />
                    <label
                      for="filter-sizes-2"
                      class="pr-6 ml-3 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >L</label
                    >
                  </div>
                </form>
              </div>
            </transition>
          </div> -->
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'ShopFilterSectionComponent',

  data() {
    return {
      sortStatus: false,
      categoryStatus: false,
      sizeStatus: false,
      offcanvasStatus: false,

      filters: {
        sort: null,
      },
    }
  },

  watch: {
    '$data.filters.sort': {
      handler() {
        this.$router.replace(`${this.$route.path}?sort=${this.filters.sort}`)
      },
      deep: true,
    },
  },
}
</script>
