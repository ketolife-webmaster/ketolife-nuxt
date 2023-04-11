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
          <section aria-labelledby="cart-heading" class="lg:col-span-7">
            <h2 id="cart-heading" class="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              class="border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              <UtilsCartProductList />
            </ul>
          </section>

          <!-- Order summary -->
          <SectionCartSummary />
        </form>
        <!-- Related products -->
      </div>
    </section>

    <SectionHighlightProducts class="pt-16" />
  </div>
</template>

<script>
export default {
  name: 'CartPage',
}
</script>
