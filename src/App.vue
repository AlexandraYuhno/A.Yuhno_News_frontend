<template>
  <div id="app">
    <AppHeader />
    <ModalApp  />
    <MainPage />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import ModalApp from './components/ModalApp.vue';
import MainPage from './pages/MainPage.vue';

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    width: 100%;
    margin: auto;
  }
</style>