<template>
    <div class="main-page">
        <PostList :posts1="posts" />
     </div>
</template>

<script setup>
  import PostList from "./PostsList.vue";
  import { computed, onMounted } from "vue";
  import { useStore } from "vuex";  

  const store = useStore();
  const posts = computed(() => store.state.posts.posts || []);

  onMounted(async () => {
    await store.dispatch('fetchPosts');
  });
</script>

<style scoped>

</style>