import { ActionContext } from "vuex";

import api from "@/store/api";
import { Post, PostsState } from "../../types";

export default {
  async fetchPosts({ commit }: ActionContext<PostsState, Post>) {
    try {
      commit("setPostsRequest");
      const { data } = await api.get("posts");
      commit("setPostsSuccess", data);
    } catch (error) {
      commit("setPostsError", error);
    }
  },
  async signIn({ commit }: ActionContext<PostsState, Post>, credentials: { email: string; password: string }) {
    try {
      commit("setAuthRequest");
      const { data } = await api.post("auth/login", credentials);
      commit("setAuthSuccess", data);
    } catch (error) {
      commit("setAuthError", error || "An error occurred");
    }
  },
  async signUp({ commit }: ActionContext<PostsState, Post>, userDetails: { login: string; email: string; password: string }) {
    try {
      commit("setAuthRequest");
      const { data } = await api.post("auth/register", userDetails);
      commit("setAuthSuccess", data);
    } catch (error) {
      commit("setAuthError", error || "An error occurred");
    }
  },
};
