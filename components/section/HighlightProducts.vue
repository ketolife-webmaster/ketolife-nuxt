<template>
  <section class="relative py-32 overflow-hidden">
    <div class="container">
      <div class="relative">
        <h2
          v-animate-on-scroll="{ type: 'fadeInUp' }"
          class="text-4xl font-bold tracking-tight text-left"
        >
          <span class="block text-4xl text-primary font-amatic lg:text-6xl"
            >The best of us</span
          >
          <span class="block tracking-widest text-black uppercase sm:text-6xl"
            >Highlights</span
          >
        </h2>

        <span
          v-animate-on-scroll="{ type: 'fadeInUp', delay: 1 }"
          class="mx-0 divide left primary"
        ></span>

        <div
          v-animate-on-scroll="{ type: 'fadeInUp' }"
          class="mx-0 text-xl italic text-left lg:max-w-3xl"
        >
          <p>
            Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro
            affert graeco. Vim nu epicuri definiebas et.
          </p>
        </div>

        <div class="mt-12 carousel-wrapper">
          <client-only>
            <carousel
              v-animate-on-scroll="{ type: 'fadeInUp' }"
              v-bind="options"
            >
              <slide
                v-for="(product, index) in products"
                :key="index"
                class="p-4"
              >
                <UtilsProductCard :product="product" />
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HighlightProductsSectionComponent',

  data() {
    return {
      products: [],
      options: {
        loop: true,
        perPage: 4,
        perPageCustom: [
          [320, 1],
          [768, 3],
          [1024, 4],
        ],
        paginationEnabled: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        centerMode: true,
      },
    }
  },

  async fetch() {
    const products = await this.$calls.items({
      collection: 'products',
      filter: {
        status: {
          _eq: 'published',
        },
        featured: {
          _eq: true,
        },
      },
    })

    this.products = products.data
  },
}
</script>

<style>
* > button.VueCarousel-dot:not(:first-child) {
  @apply !ml-3;
}
button.VueCarousel-dot {
  @apply !w-3 !h-3 !transition-all !duration-300 !ease-in-out !bg-tertiary focus:!outline-none !border !rounded-full !border-primary hover:!bg-primary !mt-0 !p-0;
}
button.VueCarousel-dot.VueCarousel-dot--active {
  @apply !transform !scale-125 !bg-primary;
}
</style>
