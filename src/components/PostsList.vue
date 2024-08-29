<template>
  <div class="grid">
      <PostItem  
        v-for="post in posts" :key="post.id"
        :post="post"
      />
    </div>
</template>

<script>
  import PostItem from './PostItem.vue';
  export default {
    components: {PostItem},
    props: {
      posts: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: masonry;
    gap: 16px;
  }
</style>