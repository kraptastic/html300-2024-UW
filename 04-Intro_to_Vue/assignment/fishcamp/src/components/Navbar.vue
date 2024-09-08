<script setup>
import { ref, computed } from 'vue'
</script>

<template>
  <div id="notify">
    <nav class="navbar navbar-dark btn-group-horizontal justify-content-around">
      <a href="./booking.html"><button class="btn btn-outline-primary m-3">Book A Trip</button></a>

      <a href="./gallery.html"><button class="btn btn-outline-primary m-3">Trip Gallery</button></a>

      <a href="./faq.html"><button class="btn btn-outline-primary m-3">FAQ Page</button></a>

      <a href="./contact.html"><button class="btn btn-outline-primary m-3">Contact Us</button></a>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#notify {
  border: 3px solid blue;
}
</style>
