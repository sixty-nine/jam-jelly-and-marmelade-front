import { ActionTree } from 'vuex'
import { AuthModuleState } from './index';
import { RootState } from '~/store';
import {
    Provider,
    AuthChangeEvent,
    Session
} from '~/node_modules/@supabase/supabase-js';


const actions: ActionTree<AuthModuleState, RootState> = {

    async init({ commit }) {

        // When the state of authentication changes we set the session
        this.$supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
            commit('setSession', session);
        });

        // On startup we use the current session, if any...
        commit('setSession', this.$supabase.auth.session());
    },

    async signIn({ commit }, provider: Provider) {
        await this.$supabase.auth.signIn({ provider });
    },

    async signOut() {
        await this.$supabase.auth.signOut();
    }
};

export default actions;