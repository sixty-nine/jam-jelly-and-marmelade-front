import { GetterTree } from 'vuex'
import { AuthModuleState } from './index';
import { RootState } from '~/store';

const getters: GetterTree<AuthModuleState, RootState> = {
    loggedIn: state => null !== state.session,
};

export default getters;