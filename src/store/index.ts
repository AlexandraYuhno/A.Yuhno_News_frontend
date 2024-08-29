import Vuex from 'vuex';
import { postModule } from './modules/postModule';

export default new Vuex.Store({
  modules: {
    post: postModule
  }
});