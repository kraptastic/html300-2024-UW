<script setup>
import { ref } from 'vue'
import ImageCards from '@/components/ImageCards.vue'

//store details for page header and sub header
const pageHeader = 'View examples of trips'
const subHeader =
  'Pollock nurseryfish dwarf gourami salmon bigscale threespine stickleback, tuna Asiatic glassfish.'
</script>

<template>
  <div class="col-12 py-4 px-4 text-center justify-content-around">
    <!-- main content area-->

    <h1 class="">{{ pageHeader }}</h1>
    <p class="lead">
      {{ subHeader }}
    </p>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <!-- responsive grid for xs<med<lg sized displays, using ImageCards component to house images -->
      <ImageCards></ImageCards>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
