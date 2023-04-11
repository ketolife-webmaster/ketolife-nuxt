<template>
  <li>
    <div class="flex py-6 sm:py-10">
      <div class="flex-shrink-0">
        <img
          src="https://bf9mpgu8.directus.app/assets/65c69a99-9ea0-4bc8-a0ab-8a91677fff44"
          alt=""
          class="object-cover object-center w-24 h-24 shadow rounded-xl sm:h-32 sm:w-32"
        />
      </div>

      <div class="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
        <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div class="flex justify-between">
              <h3 class="text-lg">
                <nuxt-link
                  to="/shop/testproduct"
                  class="font-medium text-primary hover:underline"
                  >Cheesecake de Arandanos</nuxt-link
                >
              </h3>
            </div>
            <div class="flex mt-1 text-sm">
              <p class="text-tertiary">Complete</p>
            </div>
            <p class="mt-1 text-sm font-medium text-gray-500">S./ 168.00</p>
          </div>

          <div class="mt-4 sm:mt-0 sm:pr-9">
            <label for="quantity" class="sr-only">Quantity</label>
            <select
              id="quantity"
              name="quantity"
              class="max-w-full py-1.5 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>

            <div class="absolute top-0 right-0">
              <button
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
export default {
  name: 'CartProductListComponent',
}
</script>
