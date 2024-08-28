<template>
  <div id="app">
    <h1>The Daily Bugle</h1>
    <hr />
    <PostList :posts="posts"/>
  </div>
</template>

<script>
  import PostList from './components/PostsList.vue';
  export default {
    name: 'app',
    components: {
      PostList,
    },
    data(){
      return{
        posts:[
          {
            id:1, 
            title: "Headers 1", 
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.",
            img_url:"https://images.unsplash.com/photo-1723754165998-305df32c501e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id:2, 
            title: "Headers 2", 
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.",
            img_url:"https://images.unsplash.com/photo-1723754166126-cadbccbe8820?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id:3, 
            title: "Headers 3", 
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.",
            img_url:"https://images.unsplash.com/photo-1662667248215-558557c908a2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id:4, 
            title: "Headers 3", 
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, laboriosam.",
            img_url:"https://images.unsplash.com/photo-1675190711033-f7375c7df6b2?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }, 
        ]
      }
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
    font-family: 'Dancing Script', sans-serif;
    text-align: center;
  }
  
  #app {
    width: 80%;
    margin: 0 auto;
  }
</style>
