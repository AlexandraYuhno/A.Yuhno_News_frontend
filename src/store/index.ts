import Vuex from "vuex";

import { posts } from "./modules/postModule";

export default new Vuex.Store({
  modules: {
    posts: posts,
  },
});
