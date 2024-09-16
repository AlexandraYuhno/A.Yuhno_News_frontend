import { PostsState } from "../../types";

export default {
  state: (): PostsState => ({
    posts: [],
    isLoading: false,
    error: null,
    authLoading: false,
    authError: null,
    user: null,
    token: null,
  }),
};
