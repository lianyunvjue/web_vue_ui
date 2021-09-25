import { Module } from 'vuex';
import {
  postCreateStoreModule,
  PostCreateStoreState,
} from './create/post-create.store';
import { RootState } from '../app/app.store';

export interface PostStoreState {
  ceate: PostCreateStoreState;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true,

  modules: {
    create: postCreateStoreModule,
  },
};
