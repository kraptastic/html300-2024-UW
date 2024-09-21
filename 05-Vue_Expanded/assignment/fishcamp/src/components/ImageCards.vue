<script setup>
import { defineProps, ref } from 'vue'

//DRY -- store props to use in template, to be received from parent component
const prop = defineProps({
  imgSrc: String,
  imgAltText: String,
  cardTitle: String,
  cardText: String
})
</script>

<template>
  <div :class="col">
    <div class="card h=100">
      <!-- templated img and card element with props passed from parent -->
      <img
        :src="prop.imgSrc"
        class="d-block w-100"
        :alt="prop.imgAltText"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        v-bind:data-bs-title="prop.cardTitle"
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
