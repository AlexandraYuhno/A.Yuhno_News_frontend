import { Post, PostsState } from "../../types";

export default {
  setPostsRequest(state: PostsState) {
    state.isLoading = true;
  },
  setPostsSuccess(state: PostsState, payload: Post[]) {
    state.posts = payload;
    state.isLoading = false;
  },

  setPostsError(state: PostsState, payload: string) {
    state.error = payload;
    state.isLoading = false;
  },

  setAuthRequest(state: PostsState) {
    state.authLoading = true;
    state.authError = null;
  },
  setAuthSuccess(state: PostsState, data: { user: string; token: string }) {
    state.authLoading = false;
    state.user = data.user;
    state.token = data.token;
  },
  setAuthError(state: PostsState, error: string) {
    state.authLoading = false;
    state.authError = error;
  },
};
