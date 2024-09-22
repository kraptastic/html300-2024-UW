<script setup></script>

<template>
  <div class="row bg-primary align-items-center p-0 m-0">
    <div class="col-lg-3 col-xs-10 p-2 text-center">
      <slot name="headerDivOne"></slot>
    </div>
    <div class="col-lg-5 col-xs-10 p-2 text-center">
      <slot name="headerDivTwo"></slot>
    </div>
    <div class="col-lg-4 col-xs-10 p-2 text-center">
      <slot name="headerDivThree"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
