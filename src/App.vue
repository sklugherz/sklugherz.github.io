<script setup>

  import { RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';
  import AppFooter from './components/AppFooter.vue';

</script>

<template>

  <NavBar />
  <div class="content">
    <RouterView />
  </div>
  <AppFooter />

</template>

<style scoped>

.content {
  padding-top: 4%;
  padding-bottom: 4%;
  padding-left: 2%;
  padding-right: 2%;
  min-height: calc(80vh - 61px);
  line-height: 1.5;
}

</style>
