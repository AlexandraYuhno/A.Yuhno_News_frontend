import { ActionContext } from 'vuex';

import api from '@/store/api';
import { Post, PostsState } from '../../types';

export default {
  async fetchPosts({ commit }: ActionContext<PostsState, Post>) {
    try {
      commit('setPostsRequest');
      const { data } = await api.get('posts');
      commit('setPostsSuccess', data);
    } catch (error) {
      commit('setPostsError', error);
    }
  }
};
