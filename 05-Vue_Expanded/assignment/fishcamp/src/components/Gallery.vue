<script setup>
import { ref } from 'vue'
import ImageCards from '@/components/ImageCards.vue'
//import assets because that's how vue/webpack likes to have paths resolved
import tolmie from '@/assets/tolmie_lookout.jpg'
import stillaguamish from '@/assets/stillaguamish_south_fork.jpg'
import lakeview from '@/assets/rainier_lake.jpg'
import placeholder from '@/assets/image.png'
// store card/image locations, alt ids, in object
const cardDetails = ref([
  {
    dir: tolmie,
    altText: 'view of mt rainier from tolmie fire lookout',
    dataTitle: 'Visit a fire lookout in the alpine wilderness surrounding Mt. Rainier',
    cardTitle: 'Unsurpassed beauty',
    cardText:
      'Mudfish kaluga yellowfin grouper forehead brooder suckermouth armored catfish mudminnow pejerrey sea raven popeye catafula whalefish, sargassum fish.'
  },
  {
    dir: stillaguamish,
    altText: 'rapid autumn waters in stillaguamish south fork river',
    dataTitle: 'Flood rapids in Stillaguamish River South Fork',
    cardTitle: 'River fishing',
    cardText:
      'Mudfish kaluga yellowfin grouper forehead brooder suckermouth armored catfish mudminnow pejerrey sea raven popeye catafula whalefish, sargassum fish.'
  },
  {
    dir: lakeview,
    altText: 'alpine lake in mt rainier national park',
    dataTitle: 'alpine lake and forest, mt. rainier national park',
    cardTitle: 'Hidden alpine lakes and forests in Mt. Rainier National Park',
    cardText:
      'Mudfish kaluga yellowfin grouper forehead brooder suckermouth armored catfish mudminnow pejerrey sea raven popeye catafula whalefish, sargassum fish.'
  },
  {
    dir: placeholder,
    altText: 'Placeholder image for responsive testing or content expansion',
    dataTitle: 'Placeholder image for responsive testing or content expansion',
    cardTitle: 'Placeholder Image',
    cardText:
      'Mudfish kaluga yellowfin grouper forehead brooder suckermouth armored catfish mudminnow pejerrey sea raven popeye catafula whalefish, sargassum fish.'
  }
])

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
      <!-- responsive grid for xs<med<lg sized displays, using ImageCards component to house images,
      followed by imagecards component which is templated at lower scope, passing props from the object above -->
      <ImageCards
        v-for="c in cardDetails"
        :key="c.dir"
        :imgSrc="c.dir"
        :imgAltText="c.altText"
        :cardTitle="c.cardTitle"
        :cardText="c.cardText"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
