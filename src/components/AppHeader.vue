<template>
  <header>
    <div class="logo">The Daily Bugle</div>
    <div class="header-content">
      <h1>The Daily Bugle</h1>
    </div>
    <div class="header-button">
      <button class="button-in" @click="emit('open-sign-in')">Sign in</button>
      <button class="button-up" @click="emit('open-sign-up')">Sign up</button>
    </div>
  </header>
</template>

<script setup lang="ts">
  const emit = defineEmits(['open-sign-in', 'open-sign-up']); 
</script>


<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    margin-bottom: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
  }

  body {
    padding-top: 80px;
  }

  h1 {
    font-family: "Dancing Script", sans-serif;
    margin: 0;
    text-align: center;
    flex-grow: 1;
  }

  .logo {
    background-color: black;
    color: white;
    font-family: "Dancing Script", sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .header-content {
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }

  .header-button {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }

  .button-in,
  .button-up {
    background-color: #000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    flex: 1;
    text-align: center;
    font-family: "Dancing Script", sans-serif;
  }

  .button-in:hover,
  .button-up:hover {
    background-color: #555;
  }

  .button-in:active,
  .button-up:active {
    transform: scale(0.98);
  }
</style>
