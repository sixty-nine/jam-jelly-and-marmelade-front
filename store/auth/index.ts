import actions from './actions';
import mutations from './mutations';
import getters from './mutations';

import { Session } from '@supabase/supabase-js'

export type AuthModuleState = {
  session: Session | null;
}

export const state = (): AuthModuleState => ({
  session: null,
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
