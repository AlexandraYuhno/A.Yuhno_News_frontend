import { PostsState } from "../types"

export default {
    state: (): PostsState => ({
      posts:[],
      isLoading:false,
      error: null,
    }),
}
