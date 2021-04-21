import { MutationTree } from 'vuex'
import { Session } from '@supabase/supabase-js'
import { AuthModuleState } from './index';

const mutations: MutationTree<AuthModuleState> = {

    setSession(state, session: Session) {
        state.session = session;
    },

};

export default mutations;
