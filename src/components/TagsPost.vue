<template>
  <div>
    <span 
    v-for="tag in tagsArray" 
    :key="tag.id" 
    :name="tag.name" 
    class="tag">
      {{ tag.name }}
    </span>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  export interface Tag {
    id: number;
    name: string;
  }

  defineProps<{ tagsArray: Tag[] }>();

</script>

<style scoped>
  .tag {
    display: inline-block;
    margin: 5px 10px;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    color: var(--shadow-color);
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    text-align: end;
    font-style: italic;
  }

  .tag:hover {
    transform: scale(1.1);
    background-color: var(--shadow-color);
    color: var(--background-color);
  }
</style>
