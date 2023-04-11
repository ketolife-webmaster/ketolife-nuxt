<template>
  <div>
    <SectionInnerPageTitle
      title="Checkout"
      background-image="AdobeStock_413772753.webp"
    />

    <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
    <div class="py-16 bg-white">
      <div class="container">
        <h2 class="sr-only">Checkout</h2>

        <form class="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section class="lg:col-span-7">
            <div>
              <h2 class="mb-4 text-lg font-medium text-gray-900">
                Contact information
              </h2>

              <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <div>
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      autocomplete="given-name"
                      placeholder="Firstname"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <input
                      id="last-name"
                      type="text"
                      name="last-name"
                      placeholder="Lasttname"
                      autocomplete="family-name"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <input
                      id="email-address"
                      type="email"
                      name="email-address"
                      autocomplete="email"
                      placeholder="Email"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      autocomplete="tel"
                      placeholder="Phone"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-10 mt-10 border-t border-gray-200">
              <h2 class="mb-4 text-lg font-medium text-gray-900">
                Shipping information
              </h2>

              <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div class="sm:col-span-2">
                  <div>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      placeholder="Address"
                      autocomplete="street-address"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <div>
                    <input
                      id="apartment"
                      type="text"
                      placeholder="Apartment, suite, etc."
                      name="apartment"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      placeholder="City"
                      autocomplete="address-level2"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <select
                      id="country"
                      name="country"
                      placeholder="Country"
                      autocomplete="country-name"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    >
                      <option>Perú</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div>
                    <input
                      id="region"
                      type="text"
                      name="region"
                      placeholder="Region"
                      autocomplete="address-level1"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <input
                      id="postal-code"
                      type="text"
                      name="postal-code"
                      placeholder="Postal Code"
                      autocomplete="postal-code"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="pt-10 mt-10 border-t border-gray-200">
              <fieldset>
                <legend class="text-lg font-medium text-gray-900">
                  Delivery method
                </legend>

                <div
                  class="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
                >
                  <!~~
                Checked: "border-transparent", Not Checked: "border-gray-300"
                Active: "ring-2 ring-indigo-500"
              ~~>
                  <label
                    class="relative flex p-4 bg-white border rounded-lg shadow-sm cursor-pointer focus:outline-none"
                  >
                    <input
                      type="radio"
                      name="delivery-method"
                      value="Standard"
                      class="sr-only"
                      aria-labelledby="delivery-method-0-label"
                      aria-describedby="delivery-method-0-description-0 delivery-method-0-description-1"
                    />
                    <span class="flex flex-1">
                      <span class="flex flex-col">
                        <span
                          id="delivery-method-0-label"
                          class="block text-sm font-medium text-gray-900"
                          >Standard</span
                        >
                        <span
                          id="delivery-method-0-description-0"
                          class="flex items-center mt-1 text-sm text-gray-500"
                          >4–10 business days</span
                        >
                        <span
                          id="delivery-method-0-description-1"
                          class="mt-6 text-sm font-medium text-gray-900"
                          >$5.00</span
                        >
                      </span>
                    </span>
                    <!~~
                  Not Checked: "hidden"

                  Heroicon name: mini/check-circle
                ~~>
                    <svg
                      class="w-5 h-5 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <!~~
                  Active: "border", Not Active: "border-2"
                  Checked: "border-indigo-500", Not Checked: "border-transparent"
                ~~>
                    <span
                      class="absolute border-2 rounded-lg pointer-events-none -inset-px"
                      aria-hidden="true"
                    ></span>
                  </label>

                  <!~~
                Checked: "border-transparent", Not Checked: "border-gray-300"
                Active: "ring-2 ring-indigo-500"
              ~~>
                  <label
                    class="relative flex p-4 bg-white border rounded-lg shadow-sm cursor-pointer focus:outline-none"
                  >
                    <input
                      type="radio"
                      name="delivery-method"
                      value="Express"
                      class="sr-only"
                      aria-labelledby="delivery-method-1-label"
                      aria-describedby="delivery-method-1-description-0 delivery-method-1-description-1"
                    />
                    <span class="flex flex-1">
                      <span class="flex flex-col">
                        <span
                          id="delivery-method-1-label"
                          class="block text-sm font-medium text-gray-900"
                          >Express</span
                        >
                        <span
                          id="delivery-method-1-description-0"
                          class="flex items-center mt-1 text-sm text-gray-500"
                          >2–5 business days</span
                        >
                        <span
                          id="delivery-method-1-description-1"
                          class="mt-6 text-sm font-medium text-gray-900"
                          >$16.00</span
                        >
                      </span>
                    </span>
                    <!~~
                  Not Checked: "hidden"

                  Heroicon name: mini/check-circle
                ~~>
                    <svg
                      class="w-5 h-5 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <!~~
                  Active: "border", Not Active: "border-2"
                  Checked: "border-indigo-500", Not Checked: "border-transparent"
                ~~>
                    <span
                      class="absolute border-2 rounded-lg pointer-events-none -inset-px"
                      aria-hidden="true"
                    ></span>
                  </label>
                </div>
              </fieldset>
            </div> -->

            <!-- Payment -->
            <!-- <div class="pt-10 mt-10 border-t border-gray-200">
              <h2 class="text-lg font-medium text-gray-900">Payment</h2>

              <fieldset class="mt-4">
                <legend class="sr-only">Payment type</legend>
                <div
                  class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10"
                >
                  <div class="flex items-center">
                    <input
                      id="credit-card"
                      name="payment-type"
                      type="radio"
                      checked
                      class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label
                      for="credit-card"
                      class="block ml-3 text-sm font-medium text-gray-700"
                      >Credit card</label
                    >
                  </div>

                  <div class="flex items-center">
                    <input
                      id="paypal"
                      name="payment-type"
                      type="radio"
                      class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label
                      for="paypal"
                      class="block ml-3 text-sm font-medium text-gray-700"
                      >PayPal</label
                    >
                  </div>

                  <div class="flex items-center">
                    <input
                      id="etransfer"
                      name="payment-type"
                      type="radio"
                      class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label
                      for="etransfer"
                      class="block ml-3 text-sm font-medium text-gray-700"
                      >eTransfer</label
                    >
                  </div>
                </div>
              </fieldset>

              <div class="grid grid-cols-4 mt-6 gap-y-6 gap-x-4">
                <div class="col-span-4">
                  <label
                    for="card-number"
                    class="block text-sm font-medium text-gray-700"
                    >Card number</label
                  >
                  <div class="mt-1">
                    <input
                      id="card-number"
                      type="text"
                      name="card-number"
                      autocomplete="cc-number"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div class="col-span-4">
                  <label
                    for="name-on-card"
                    class="block text-sm font-medium text-gray-700"
                    >Name on card</label
                  >
                  <div class="mt-1">
                    <input
                      id="name-on-card"
                      type="text"
                      name="name-on-card"
                      autocomplete="cc-name"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div class="col-span-3">
                  <label
                    for="expiration-date"
                    class="block text-sm font-medium text-gray-700"
                    >Expiration date (MM/YY)</label
                  >
                  <div class="mt-1">
                    <input
                      id="expiration-date"
                      type="text"
                      name="expiration-date"
                      autocomplete="cc-exp"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="cvc"
                    class="block text-sm font-medium text-gray-700"
                    >CVC</label
                  >
                  <div class="mt-1">
                    <input
                      id="cvc"
                      type="text"
                      name="cvc"
                      autocomplete="csc"
                      class="w-full py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div> -->
          </section>

          <!-- Order summary -->
          <SectionCheckoutSummary />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
}
</script>
