export default {
  state: () => ({
    authLoading: false,
    isAuthenticated: !!localStorage.token,
    error: null,
  }),
};
