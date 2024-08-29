<template>
  <div id="app">
    <h1>The Daily Bugle</h1>
    <hr />
    <PostList :posts="posts"/>
  </div>
</template>

<script>
  import PostList from './components/PostsList.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'app',
    components: {
      PostList,
    },
    computed: {
    ...mapGetters({
      posts: "posts"
    })
  },
  mounted() {
    this.$store.dispatch('posts/fetchPosts');
  }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap'); 
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    margin: 20px;
    font-family: 'Dancing Script', sans-serif;
    text-align: center;
  }
  
  #app {
    width: 80%;
    margin: 0 auto;
  }
</style>
