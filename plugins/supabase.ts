import { Context, Plugin } from '~/node_modules/@nuxt/types';
import { createClient, SupabaseClient } from '@supabase/supabase-js'

declare module 'vue/types/vue' {
    interface Vue {
        $supabase: SupabaseClient;
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $supabase: SupabaseClient;
    }
}

const supabasePlugin: Plugin = (context: Context, inject) => {

    inject(
        'supabase',
        createClient(context.$config.supabaseUrl, context.$config.supabaseKey)
    );
};

export default supabasePlugin;