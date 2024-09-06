<template>
  <div>
    <span 
      v-for="tags in tagsArray" 
      :key="tags.id" 
      :name="tags.name"
      class="tag"
    >
    {{ tags.name }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Tag } from './typesProps';

defineProps<{ tagsArray: Tag[] }>();

</script>

<style scoped>
.tag {
  display: inline-block;
  margin: 5px 10px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-align: end;
  font-style: italic;
}

.tag:hover {
  transform: scale(1.1);
  background-color: #000;
  color: #fff;
}

</style>
