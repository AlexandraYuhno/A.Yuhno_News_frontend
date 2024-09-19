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

export interface AuthState {
  authLoading: boolean;
  isLoggedIn: boolean;
  error: string | null;
}

export const stateAuth = (): AuthState => ({
  authLoading: false,
  isLoggedIn: false,
  error: null,
});

export interface ModalState {
  showModal: boolean;
  modalType: string | null;
}

export const stateModal = (): ModalState => ({
  showModal: false,
  modalType: null,
});
