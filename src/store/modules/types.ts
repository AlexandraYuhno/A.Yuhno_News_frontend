export interface Post {
    id: number;
    title: string;
    content: string;
  }
  
  export interface PostsState {
    posts: Post[];
    isLoading: boolean;
    error: string | null;
  }
  
  export const state = (): PostsState => ({
    posts: [],
    isLoading: false,
    error: null,
  });