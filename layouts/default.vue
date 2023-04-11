<template>
  <div id="defaultLayout">
    <Header />
    <Nuxt keep-alive :keep-alive-props="{ max: 5 }" />
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
