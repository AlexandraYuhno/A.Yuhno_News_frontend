<template>
  <div>
    <span 
      v-for="tag in tags" 
      :key="tag.id" 
      class="tag"
    >
    {{ tag.name }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  tags: {
    type: Array as () => { id: number; name: string }[] ,
    required: true,
  },
});
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
}
</style>
