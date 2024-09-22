<script setup>
import { ref, computed } from 'vue'
import LandingPage from './components/LandingPage.vue'
import Accordion from './components/Accordion.vue'
import Contact from './components/Contact.vue'
import Gallery from './components/Gallery.vue'
import NotFound from './components/NotFound.vue'

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
  <header class="row bg-primary align-items-center p-0 m-0">
    <div class="col-lg-3 col-xs-10 p-2 text-center">
      <img
        class="img-fluid"
        src="./assets/image.png"
        alt="company logo, browser not compatible"
        width="200"
        height="200"
      />
    </div>
    <div class="col-lg-5 col-xs-10 p-2 text-center">
      <h2 class="">FishCamp, LLC Guided Fishing</h2>
      <h4 class="">
        Charters and guided and backpack fishing sustainably in WA, OR, ID mountain lakes and
        streams
      </h4>
    </div>
    <div class="col-lg-4 col-xs-10 p-2 text-center">
      <h5 class="">12345 McRoad Street, Black Diamond, WA 98010</h5>
    </div>
  </header>
  <div class="row bg-warning p-0 m-0">
    <nav class="navbar navbar-dark btn-group-horizontal justify-content-around">
      <a href="#/"><button class="btn btn-outline-primary m-3">Landing Page</button></a>

      <a href="#/Gallery"><button class="btn btn-outline-primary m-3">Trip Gallery</button></a>

      <a href="#/Accordion"><button class="btn btn-outline-primary m-3">FAQ Page</button></a>

      <a href="#/Contact"><button class="btn btn-outline-primary m-3">Contact Us</button></a>
    </nav>
  </div>
  <main class="row bg-white p-0 m-0">
    <!--main content element that is dependent on the logic in script above-->
    <component :is="currentView" />
  </main>

  <footer class="row text-light bg-dark text-center p-0 m-0">
    <h4 class="p-4 m-3">FishCamp LLC - Sustaining Natural Memories</h4>
    <p class="lead p-4">
      Charters and guided and backpack fishing sustainably in WA, OR, ID mountain lakes and streams
    </p>
    <nav class="navbar navbar-dark btn-group-vertical justify-content-around">
      <a href="./booking.html"><button class="btn btn-outline-primary m-3">Book A Trip</button></a>

      <a href="./gallery.html"><button class="btn btn-outline-primary m-3">Trip Gallery</button></a>

      <a href="./faq.html"><button class="btn btn-outline-primary m-3">FAQ Page</button></a>

      <a href="./contact.html"><button class="btn btn-outline-primary m-3">Contact Us</button></a>
    </nav>
    <p class="p-4">Created 2024 Sites-To-Go LLC Seattle</p>
  </footer>
</template>

<style scoped></style>
