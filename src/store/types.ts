export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface PostsState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
  authLoading: boolean;
  authError: string | null;
  user: string | null;
  token: string | null;
}

export const state = (): PostsState => ({
  posts: [],
  isLoading: false,
  error: null,
  authLoading: false,
  authError: null,
  user: null,
  token: null,
});
