<template>
  <header>
    <div class="logo">The Daily Bugle</div>
    <div class="header-content">
      <h1>The Daily Bugle</h1>
    </div>
  </header>
</template>

<script></script>

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

</style>
