<template>
  <header>
    <h1>The Daily Bugle</h1>
    <button>Sign in</button>
    <button>Sign up</button>
  </header>
</template>

<script>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap");
header {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
}

header button {
  border: 1px solid #000;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

header button:hover {
  background-color: #000;
}

body {
  padding-top: 80px;
}

h1 {
  font-family: "Dancing Script", sans-serif;
  margin: 20px;
  text-align: center;
}
</style>