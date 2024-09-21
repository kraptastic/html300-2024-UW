<script setup>
import logo from '@/assets/image.png'
</script>

<template>
  <div class="row bg-primary align-items-center p-0 m-0">
    <div class="col-lg-3 col-xs-10 p-2 text-center">
      <img
        class="img-fluid"
        :src="logo"
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
  </div>
  <!-- nav bar part of header-->
  <div class="row bg-warning p-0 m-0">
    <nav class="navbar navbar-dark btn-group-horizontal justify-content-around">
      <a href="#/"><button class="btn btn-outline-primary m-3">Landing Page</button></a>

      <a href="#/Gallery"><button class="btn btn-outline-primary m-3">Trip Gallery</button></a>

      <a href="#/Accordion"><button class="btn btn-outline-primary m-3">FAQ Page</button></a>

      <a href="#/Contact"><button class="btn btn-outline-primary m-3">Contact Us</button></a>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
