<template>
  <div class="grid">
    <PostItem v-for="post in posts1"
    :post2="post" 
    :key="post.id" />
  </div>
</template>

<script setup>
  import PostItem from "./PostItem.vue";
  import { defineProps } from "vue";

 defineProps({
    posts1: {
      type: Array,
      required: true,
    },
  });

</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
  }
</style>
