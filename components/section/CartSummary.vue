<template>
  <section
    aria-labelledby="summary-heading"
    class="px-4 py-6 mt-16 bg-gray-100 border border-gray-200 shadow-2xl rounded-2xl sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
  >
    <h2 id="summary-heading" class="text-lg font-bold text-black">
      Resúmen de la compra
    </h2>

    <dl class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <dt class="text-sm text-gray-600">Subtotal</dt>
        <dd class="text-sm font-medium text-primary">
          {{ currency }} {{ summary?.subtotal }}
        </dd>
      </div>
      <div
        class="flex items-center justify-between pt-4 border-t border-gray-200"
      >
        <dt class="flex items-center text-sm text-gray-600">
          <span>Estimado de envío</span>
          <a
            href="#"
            class="flex-shrink-0 ml-2 text-gray-400 hover:text-primary"
          >
            <span class="sr-only">Aprende como se calcula el envío</span>
            <!-- Heroicon name: mini/question-mark-circle -->
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </dt>
        <dd class="text-sm font-medium text-primary">
          {{ currency }} {{ summary?.shipping }}
        </dd>
      </div>
      <div
        class="flex items-center justify-between pt-4 border-t border-gray-200"
      >
        <dt class="flex text-sm text-gray-600">
          <span>Impuesto estimado</span>
          <a
            href="#"
            class="flex-shrink-0 ml-2 text-gray-400 hover:text-primary"
          >
            <span class="sr-only">Aprende como se calcula el impuesto</span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </dt>
        <dd class="text-sm font-medium text-primary">
          {{ currency }} {{ summary?.tax }}
        </dd>
      </div>
      <div
        class="flex items-center justify-between pt-4 border-t border-gray-200"
      >
        <dt class="text-base font-medium text-black">Total de la orden</dt>
        <dd class="text-base font-medium text-black">
          {{ currency }} {{ summary?.total }}
        </dd>
      </div>
    </dl>

    <div class="mt-6">
      <nuxt-link to="/checkout" type="submit" class="btn primary"
        >Checkout</nuxt-link
      >
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartSummarySectionCompoenent",

  computed: {
    ...mapGetters({
      currency: "getCurrency",
      summary: "cart/getCartSummary",
    }),
  },
};
</script>
