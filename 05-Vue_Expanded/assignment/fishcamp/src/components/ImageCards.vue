<script setup>
import { defineProps, ref } from 'vue'

//DRY -- store props to use in template, to be received from parent component
const prop = defineProps({
  imgSrc: String,
  imgAltText: String,
  cardTitle: String,
  cardText: String
})

// store boolean to set a state, use let to allow variable to change
let clickedState = ref(false)
// make a function and pass the event object in
function toggleBorder(e) {
  this.clickedState = !this.clickedState
  if (this.clickedState === true) {
    e.target.style.border = '3px dashed magenta'
    console.log('something happened')
  } else {
    e.target.style.border = 'none'
  }
}
</script>

<template>
  <div :class="col">
    <div class="card h=100">
      <!-- templated img and card element with props passed from parent, listen for click to pass the click event to toggleBorder function -->
      <img
        :src="prop.imgSrc"
        class="d-block w-100"
        :alt="prop.imgAltText"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        v-bind:data-bs-title="prop.cardTitle"
        @click="toggleBorder($event)"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ prop.cardTitle }}</h5>
      <p class="card-text">
        {{ prop.cardText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
