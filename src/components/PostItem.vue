<template>
  <div class="post">
    <h3 class="post-title"> {{ post2.title }} </h3>
    <div class="post-image-wrapper">
      <img alt="Post Image" class="post-image" :src="post2.imgUrl" />
    </div>
    <div class="post-content">
      <p class="post-descriptions">
        {{ post2.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  defineProps({
    post2: {
      type: Object,
      required: true,
    }
});

</script>

<style scoped>
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
  
   
    .post-content {
      padding: 20px;
      margin-bottom: 20px;
      max-height: calc(1.55em * 3);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

    }
  
    .post-description {
      font-size: 1em;
      color: #555; 
      line-height: 1.55;
      margin-bottom: 20px;
      max-width: 100%;

    } 
</style>
