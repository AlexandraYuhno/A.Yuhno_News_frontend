import { ActionContext } from "vuex";
import api from "@/store/api";
import { Post, PostsState } from "../../../types";

const TOKEN_KEY = 'token';

export default {
  async signIn({ commit }: ActionContext<PostsState, Post>, credentials: { email: string; password: string }) {
    try {
      commit("setAuthRequest");
      const { data } = await api.post("auth/login", credentials);
      commit("setAuthSuccess", { user: data.user, token: data.access });
      localStorage.setItem(TOKEN_KEY, data.access);
    } catch (error) {
      commit("setAuthError", error || "An error occurred");
    }
  },

  async signUp({ commit, dispatch }: ActionContext<PostsState, Post>, userDetails: { login: string; email: string; password: string }) {
    try {
      commit("setAuthRequest");
      await api.post("auth/register", userDetails);
      commit("setSuccess");
      await dispatch("signIn", { email: userDetails.email, password: userDetails.password });
    } catch (error) {
      commit("setAuthError", error || "An error occurred");
    }
  },
  
  logout({ commit }: ActionContext<PostsState, unknown>) {
    localStorage.removeItem(TOKEN_KEY);
    commit('setAuthLogout');
  },
};
