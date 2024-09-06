<template>
  <div class="grid">
    <PostItem v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :content="post.content"
      :imgUrl="post.imgUrl"
      :tags="post.tags"
      :created_at="post.created_at"
      :user="post.user" />
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from "vue";

  import PostItem from "./PostItem.vue";
  import { PostListProps } from "./typesProps";

 defineProps<PostListProps>();
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
  }
</style>
