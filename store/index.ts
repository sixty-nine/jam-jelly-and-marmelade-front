import { Store } from 'vuex';
import auth from '~/store/auth';

export const state = () => ({
});

export type RootState = ReturnType<typeof state>

new Store({
  modules: {
    auth,
  },
});
