<template>
  <div>
    <SectionInnerPageTitle
      title="Shopping Cart"
      background-image="AdobeStock_413772753.webp"
    />

    <section class="py-16 bg-white">
      <div class="container">
        <form
          class="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
        >
          <section aria-labelledby="cart-heading" class="lg:col-span-6">
            <h2 id="cart-heading" class="sr-only">
              Productos en tu carrito de compras
            </h2>

            <ul
              role="list"
              class="border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              <CartProductList
                v-for="(product, index) in cart"
                :key="index"
                :product="product"
                :index="index"
              />
            </ul>
          </section>

          <!-- Order summary -->
          <SectionCartSummary class="lg:col-span-6" />
        </form>
        <!-- Related products -->
      </div>
    </section>

    <SectionHighlightProducts class="pt-16" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartPage",

  computed: {
    ...mapGetters({
      cart: "cart/getCart",
    }),
  },
};
</script>
