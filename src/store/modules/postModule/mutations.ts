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
};
