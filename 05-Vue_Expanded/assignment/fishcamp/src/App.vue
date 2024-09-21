<script setup>
import { ref, computed } from 'vue'
import LandingPage from './components/LandingPage.vue'
import Accordion from './components/Accordion.vue'
import Contact from './components/Contact.vue'
import Gallery from './components/Gallery.vue'
import NotFound from './components/NotFound.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

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
  <Header></Header>

  <main class="row bg-white p-0 m-0">
    <!--main content element that is dependent on the logic in script above-->
    <component :is="currentView" />
  </main>

  <Footer></Footer>
</template>

<style scoped></style>
