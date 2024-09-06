<template>
  <div class="main-page">
    <div v-if="isLoading" class="loader">
      <div class="spinner"></div>
    </div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <PostList v-else :posts="posts" />
  </div>
</template>

<script setup>
  import PostList from "./PostsList.vue";
  import { computed, onMounted } from "vue";
  import { useStore } from "vuex";  

  const store = useStore();
  const posts = computed(() => store.state.posts.posts || []);
  const isLoading = computed(() => store.state.posts.isLoading);
  const error = computed(() => store.state.posts.error); 

  onMounted(async () => {
    await store.dispatch('fetchPosts');
  });
</script>

<style scoped>
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
  }

  .spinner {
    border: 8px solid #f3f3f3; 
    border-top: 8px solid #3498db; 
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .error {
    color: red;
    font-size: 16px;
    text-align: center;
    padding: 20px;
  }
</style>
