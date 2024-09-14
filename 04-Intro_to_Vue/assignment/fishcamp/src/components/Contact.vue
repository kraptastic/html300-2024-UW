<script setup>
import { ref } from 'vue'

// store reflected variable for show/hide of contact form in template
const show = ref(false)
</script>

<template>
  <div class="col-lg-8 col-xs-10 px-4 text-center">
    <!-- main content area-->
    <h1 class="">Todo place contact info and about us</h1>
    <p class="">
      Pollock nurseryfish dwarf gourami salmon bigscale threespine stickleback, tuna Asiatic
      glassfish. Aruana pelican gulper panga. Bonytongue Australian lungfish electric knifefish
      beardfish yellow jack torrent fish milkfish: featherfin knifefish tubeshoulder. Mudfish kaluga
      yellowfin grouper forehead brooder suckermouth armored catfish mudminnow pejerrey sea raven
      popeye catafula whalefish, sargassum fish. Dealfish koi lumpsucker, thorny catfish whale
      catfish mud cat, amago New Zealand sand diver, drum: freshwater shark, Redhorse sucker.
    </p>
    <p class="lead">Fishing is as fishing does, fishing is a healthy buzz.</p>
    <p class="">
      Hagfish; ronquil longnose sucker spiderfish; zebra turkeyfish snipe eel, combfish sturgeon
      Raccoon butterfly fish deep sea smelt. Redfin perch thorny catfish; pricklefish, shortnose
      sucker kahawai spinyfin yellow perch Indian mul dealfish ribbon sawtail fish. Antarctic
      icefish coley nase lemon shark. Triplefin blenny armored gurnard--peacock flounder dogteeth
      tetra discus Pacific albacore goby mackerel yellowfin pike. Zebra tilapia white croaker Death
      Valley pupfish ridgehead platyfish Black scabbardfish banjo catfish.
    </p>
  </div>
  <div class="col-lg-4 col-xs-10 p-2 text-center">
    <!-- sidebar content -->
    <h4 class="p-4">Send your inquiry or comment below and we will get back with you directly</h4>
    <!-- button with show/hide functionality given by variable declared in script setup -->
    <button @click="show = !show">Click here to show form</button>
    <div class="container px-5 my-2">
      <!-- contact form, lacking validations -->

      <form v-if="show" id="contactForm">
        <div class="mb-3">
          <label class="form-label" for="emailAddress">Email Address</label>
          <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
        </div>
        <div class="mb-3">
          <label class="form-label d-block">Have you already been a customer?</label>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              id="yes"
              type="radio"
              name="haveYouAlreadyBeenACustomer"
            />
            <label class="form-check-label" for="yes">Yes</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              id="no"
              type="radio"
              name="haveYouAlreadyBeenACustomer"
            />
            <label class="form-check-label" for="no">No</label>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="message">Message</label>
          <textarea
            class="form-control"
            id="message"
            type="text"
            placeholder="Message"
            style="height: 6rem"
          ></textarea>
        </div>
        <div class="d-none" id="submitSuccessMessage">
          <div class="text-center mb-3">
            <div class="fw-bolder">Form submission successful!</div>
          </div>
        </div>

        <div class="d-grid">
          <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
