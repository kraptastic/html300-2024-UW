<script setup>
import { ref, computed } from 'vue'
import LandingPage from './components/LandingPage.vue'
import Accordion from './components/Accordion.vue'
import Contact from './components/Contact.vue'
import Gallery from './components/Gallery.vue'
import NotFound from './components/NotFound.vue'
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

import logo from '@/assets/image.png'

//use standard SPA routing from docs or assignment video, map path routes, then rendered values in object called routes
const routes = {
  '/': LandingPage,
  '/Accordion': Accordion,
  '/Contact': Contact,
  '/Gallery': Gallery
}

//store the window.location.hash js value, and reflect the value so it is live
const currentPath = ref(window.location.hash)

// listen for a change to the window.location.hash, then update the value member of the currentPath stored above
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

// store currentview (to be used in the vue component in the template), compute a looked up value from routes to make it reactive to the session
// logic to clean inputs of '/' and fail to NotFound
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <Header>
    <!-- use of named slot features in vue exercised below, see div formatting present in header.vue -->
    <template #headerDivOne>
      <img
        class="img-fluid"
        :src="logo"
        alt="company logo, browser not compatible"
        width="200"
        height="200"
      />
    </template>
    <template #headerDivTwo>
      <h2 class="">FishCamp, LLC Guided Fishing</h2>
      <h4 class="">
        Charters and guided and backpack fishing sustainably in WA, OR, ID mountain lakes and
        streams
      </h4>
    </template>
    <template #headerDivThree>
      <h5 class="">12345 McRoad Street, Black Diamond, WA 98010</h5>
    </template>
  </Header>
  <!-- bring the nav component in with less flair than the header component -->
  <Nav></Nav>

  <main class="row bg-white p-0 m-0">
    <!--main content element that is dependent on the logic in script above-->
    <component :is="currentView" />
  </main>

  <Footer></Footer>
</template>

<script></script>

<style scoped></style>
