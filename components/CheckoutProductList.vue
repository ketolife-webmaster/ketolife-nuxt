<template>
  <li class="flex px-0 py-6">
    <div class="flex-shrink-0">
      <img
        src="https://bf9mpgu8.directus.app/assets/65c69a99-9ea0-4bc8-a0ab-8a91677fff44"
        alt="Front of men&#039;s Basic Tee in black."
        class="w-20 shadow rounded-xl"
      />
    </div>

    <div class="flex flex-col flex-1 ml-6">
      <div class="flex">
        <div class="flex-1 min-w-0">
          <h4 class="text-base">
            <nuxt-link
              to="/shop/testproduct"
              class="font-medium text-primary hover:text-tertiary hover:underline"
              >Cheesecake de Arandanos</nuxt-link
            >
          </h4>
          <p class="text-sm text-tertiary">Complete</p>
        </div>

        <div class="flex-shrink-0 flow-root ml-4">
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

      <div class="flex items-end justify-between flex-1">
        <p class="text-sm font-medium text-gray-900">S/. 32.00</p>

        <div class="ml-4">
          <label for="quantity" class="sr-only">Quantity</label>
          <select
            id="quantity"
            name="quantity"
            class="w-full py-1.5 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
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
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CheckoutProductListComponentn',
}
</script>
