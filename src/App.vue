<template>
  <div id="app">
    <HeadApp />
    <MainPage />
  </div>
</template>

<script setup>
  import HeadApp  from "./components/HeadApp.vue";
  import MainPage from "./components/MainPage.vue";
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
