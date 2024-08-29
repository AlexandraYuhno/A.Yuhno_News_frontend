import { ActionContext } from 'vuex';

import api from '@/store/api';
import { Post, PostsState } from '../types';

export default {
  async fetchPosts({ commit }: ActionContext<PostsState, Post>) {
    try {
      commit('setPostsRequest');
      const response = await api.get('/posts');
      commit('setPostsSuccess', response.data);
    } catch (e) {
      commit('setPostsError', 'Error while fetching posts');
    }
  }
};