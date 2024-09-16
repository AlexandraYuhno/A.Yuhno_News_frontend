<template>
  <div class="post">
    <h3 class="post-title">{{ title }}</h3>
    <div class="post-image-wrapper">
      <img alt="Post Image" class="post-image" :src="imgUrl" />
    </div>
    <div class="post-content">
      <p class="post-create">{{ formatDate(created_at) }}</p>
      <p class="post-descriptions">{{ content }}</p>
    </div>
    <div class="user">
      <a href="#" class="user-login">{{ user.login }}</a>
      <img class="user-avatar" :src="user.avatarUrl" alt="User Avatar" />
    </div>
    <div v-if="tags">
      <TagsPost :tagsArray="tags" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import TagsPost, { Tag } from './TagsPost.vue';
import { User } from "./typesProps";
import { formatDate } from '@/utils/formatDate'

export interface PostProps {
  id: number;
  content: string;
  title: string;
  imgUrl: string;
  tags: Tag[];
  created_at: string;
  user: User;
}

defineProps<PostProps>();

</script>

<style scoped>
.post {
  background-color: var(--background-color);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 600px;
  margin: 20px auto;
}

.post:hover {
  transform: translateY(-4px);
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
  color: var(--text-color)
}

.post-title:hover {
  box-shadow: 10px 5px 5px var(--shadow-color);
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
  color: var(--dark-color);
  line-height: 1.55;
  margin-bottom: 20px;
  max-width: 100%;
}

.user-login {
  margin-right: 10px;
  text-decoration: none;
  color: var(--text-color);
  font-style: italic;
}

.user-login:hover {
  color: var(--shadow-color);
}

.user {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: var(--light-color);
  border-top: 1px solid var(--border-color);
}

.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px;
  border: 1px solid var(--border-color);
  object-fit: cover;
}

.post-create {
  color: var(--create-color);
  font-size: 0.8em;
  margin-bottom: 5px;
  font-style: italic bold;
  text-align: end;
}
</style>
