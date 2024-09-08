<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
//importing my major components (minor components are imported into these at lower scope)
import PageHeader from './components/PageHeader.vue'
import Navbar from './components/Navbar.vue'
import MainContent from './components/MainContent.vue'
import Sidebar from './components/Sidebar.vue'
import PageFooter from './components/PageFooter.vue'
import { ref, computed } from 'vue'
</script>

<template>
  <header class="row bg-primary align-items-center p-0 m-0">
    <PageHeader />
  </header>
  <div class="row bg-warning p-0 m-0">
    <Navbar />
  </div>
  <main class="row bg-white p-0 m-0">
    <MainContent />
    <Sidebar />
  </main>

  <footer>
    <PageFooter />
  </footer>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>
/* .logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
