<template>
  <div id="app">
    <AppHeader />
    <MainPage />
  </div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import MainPage from "./pages/MainPage.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 80%;
  margin: 0 auto;
}
</style>
