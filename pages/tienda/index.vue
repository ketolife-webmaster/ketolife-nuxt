<template>
  <div class="">
    <SectionInnerPageTitle
      title="Nuestra tienda"
      text="Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nu epicuri definiebas et, eam in facer errem nominavi."
      background-image="AdobeStock_413772753.webp"
    />

    <section class="relative py-16">
      <div class="container">
        <!-- <SectionShopFilter /> -->

        <section
          aria-labelledby="product-heading"
          class="lg:col-span-2 xl:col-span-3"
        >
          <h2 id="product-heading" class="sr-only">Products</h2>

          <p v-if="$fetchState.pending">Fetching products...</p>
          <p v-else-if="$fetchState.error">An error occurred :(</p>
          <div
            v-else
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-4"
          >
            <ProductCard
              v-for="(product, index) in products"
              :key="index"
              :product="product"
            />
          </div>
        </section>

        <!-- <SectionShopPagination /> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ShopPage',

  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    const products = await this.$calls.items({
      collection: 'products',
      filter: {
        status: {
          _eq: 'published',
        },
      },
      sort: this.$route.query.sort || 'sort',
    })

    this.products = products?.data
  },
  watch: {
    '$route.query': '$fetch',
  },
}
</script>
