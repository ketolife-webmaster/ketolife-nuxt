<template>
  <nav
    class="flex items-center justify-between px-4 py-3 mt-16 bg-white border-t border-gray-200 sm:px-6"
    aria-label="Pagination"
  >
    <div class="hidden sm:block">
      <p class="text-sm text-gray-700">
        Showing
        <span class="font-medium">1</span>
        to
        <span class="font-medium">10</span>
        of
        <span class="font-medium">20</span>
        results
      </p>
    </div>
    <div class="flex justify-between flex-1 sm:justify-end">
      <a
        href="#"
        class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >Previous</a
      >
      <a
        href="#"
        class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >Next</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ShopPaginationComponent',
}
</script>
