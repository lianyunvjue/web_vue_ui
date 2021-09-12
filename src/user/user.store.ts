import { Module } from 'vuex';
import { RootState } from '@/app/app.store';

export interface UserState {
  currentUser: string;
}

const store: Module<UserState, RootState> = {
  namespaced: true,

  state: {
    currentUser: '',
  },

  mutations: {
    setCurrentUser(state, data) {
      state.currentUser = data;
    },
  },

  getters: {
    currentUser(state) {
      return state.currentUser;
    },
  },

  actions: {
    getCurrentUser(context) {
      const user = '王皓';
      context.commit('setCurrentUser', user);
    },
  },
};

export default store;
