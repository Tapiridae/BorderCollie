import { defineStore } from 'pinia';
import { getRandomJokes } from '@/requests/messages';
import useFetch from '@/requests';

export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
    name: 'Weishaodaren',
    isAdmin: true,
    jokes: null,
  }),

  getters: {
    addCount: (state) => state.counter * 2,
  },

  actions: {
    async fetchRandomJokes() {
      const { data } = await useFetch(getRandomJokes()).get().json();
      (<any>this.jokes) = data;
    },
  },
});
