<template>
  <div class="grid">
      <div class="post" v-for="post in posts" :key="post.id">
        <h3 class="post-title"> {{post.title}} </h3>
        <div class="post-image-wrapper">
          <img alt="Post Image" class="post-image" :src="post.img_url">
        </div>
        <div class="post-content">
          <p class="post-descriptions">
            {{post.content}}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
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

  .post {
    background-color: #fff; 
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    overflow: hidden; 
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
    max-width: 600px; 
    margin: 20px auto; 
  }

  .post:hover {
    transform: translateY(-5px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  }

  .post-image {
    width: 100%; 
    height: auto; 
    display: block;
  }
  
  .post-image-wrapper {
    height: 200px; 
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .post-content {
    padding: 20px;
    display: -webkit-box;           
    -webkit-box-orient: vertical;    
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
  }

  .post-title {
    text-align: center;
    font-size: 1.5em; 
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  .post-title:hover {
    box-shadow: 10px 5px 5px  #333;
  }

  .post-description {
    font-size: 1em;
    color: #555; 
    line-height: 1.6;
    margin-bottom: 20px;
  } 

</style>