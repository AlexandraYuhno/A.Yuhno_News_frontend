<template>
  <div class="main-page">
    <div v-if="isLoading" class="loader">
      <div class="spinner"></div>
    </div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="!posts.length" class="no-posts">
      <p>There are currently no posts...</p>
      <p>Do you want to create the first one?</p>
    </div>
    <PostList v-else :posts="posts" />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import PostList from "../components/PostsList.vue";


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
  border: 8px solid var(--border-color);
  border-top: 8px solid var(--dark-color);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.error {
  color: var(--accent-color);
  font-size: 16px;
  text-align: center;
  padding: 20px;
}

.no-posts {
  font-size: 16px;
  text-align: center;
  padding: 20px;
  color: var(--dark-color);
}
</style>
