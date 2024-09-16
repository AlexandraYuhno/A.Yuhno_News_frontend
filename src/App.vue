<template>
  <div id="app">
    <AppHeader @open-sign-in="showSignInModal" @open-sign-up="showSignUpModal" />
    <ModalApp ref="modalApp" />
    <MainPage />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';
import ModalApp from './components/ModalApp.vue';
import MainPage from './pages/MainPage.vue';

const modalApp = ref<InstanceType<typeof ModalApp> | null>(null);

function showSignInModal() {
  modalApp.value?.openModal('signIn', 'Sign In', 'Sign In');
}

function showSignUpModal() {
  modalApp.value?.openModal('signUp', 'Sign Up', 'Sign Up');
}
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