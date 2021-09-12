import { createStore, createLogger } from 'vuex';
import user, { UserState } from '@/user/user.store';
import { logger } from './app.plugin';

export interface RootState {
  name: string;
  loading: boolean;
  user?: UserState;
}

/**
 * 创建store
 */
const store = createStore({
  state: {
    name: '宁皓网',
    loading: false,
  },

  getters: {
    name(state) {
      return `1${state.name}`;
    },
  },

  mutations: {
    setName(state, data) {
      state.name = data;
    },

    setLoading(state, data) {
      state.loading = data;
    },
  },

  actions: {
    getName({ commit, rootState }) {
      // const name = '宁皓网';
      // context.commit('setName', name);
      // console.log('context', context);
      console.log('rootState', rootState);
      commit('setLoading', true);

      setTimeout(() => {
        const name = '宁皓网';
        commit('setName', name);
        commit('setLoading', false);
      }, 2000);
    },
  },

  modules: {
    user,
  },

  plugins: [createLogger(), logger],
});

export default store;
