<template>
  <div id="app">
    <h1>The Daily Bugle</h1>
    <hr />
    <PostList :posts1="posts" />
  </div>
</template>

<script setup>
  import { computed, onMounted } from "vue";
  import { useStore } from "vuex";
  import PostList from "./components/PostsList.vue";

  const store = useStore();

  const posts = computed(() => store.state.posts.posts );

  onMounted(async () => {
    await store.dispatch('fetchPosts');
  });
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  margin: 20px;
  font-family: "Dancing Script", sans-serif;
  text-align: center;
}

#app {
  width: 80%;
  margin: 0 auto;
}
</style>
