import { defineStore } from 'pinia';

export const useMainStore = defineStore('store', {
  state: () => ({
    users: [],
    posts: [],
    comments: [],
  }),
});