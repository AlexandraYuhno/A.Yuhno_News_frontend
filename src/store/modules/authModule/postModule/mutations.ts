import { AuthState } from "../../../types";

export default {
  setAuthRequest(state: AuthState) {
    state.authLoading = true;
    state.isLoggedIn = false;
    state.error = '';
  },
  setAuthSuccess(state: AuthState) {
    state.authLoading = false;
    state.isLoggedIn = true;
    state.error = '';
  },
  setRegisterSuccess(state: AuthState) {
    state.authLoading = false;
  },
  setAuthLogout(state: AuthState) {
    state.isLoggedIn = false;
  },
  setAuthError(state: AuthState, payload: string) {
    state.error = payload;
    state.authLoading = false;
    state.isLoggedIn = false;
    },
    clearLoginError(state: AuthState) {
      state.error = '';
    },
};
