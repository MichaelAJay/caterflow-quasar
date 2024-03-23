import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    setUserAuthenticated(isAuthenticated: boolean) {
      this.isAuthenticated = isAuthenticated;
    },
  },
});
