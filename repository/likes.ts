import { SupabaseClient } from '@supabase/supabase-js'

export class LikesRepository {

    private readonly supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    public async likeJam(jam: string): Promise<void> {

        try {

            const user_id = this.supabase.auth.session()?.user.id;

            if (!user_id) {
                throw new Error('Not logged in');
            }

            const { error } = await this.supabase
                .from('likes')
                .insert({ jam, user_id })
            ;

            if (error) {
                throw error;
            }

        } catch (e) {
            console.error('error', e);
        }
    }

    public async isLiked(jam: string): Promise<boolean> {

        try {
            const { data, error } = await this.supabase
                .from('likes')
                .select('*')
                .eq('jam', jam)
                .single()
            ;

            if (!error && data) {
                return true;
            }

        } catch (e) {
        }

        return false;
    }
}