import {supabase} from '../supabaseClient';

export const authService = {
  // async updateProfile() {
  //   try {
  //     const {data, error} = await supabase.auth.signInWithPassword({
  //       email: 'lucasthirion@live.fr',
  //       password: '------',
  //     });
  //     if (data.error !== null) return;
  //     let user = data.data.user;
  //     console.log('data.error', data.error);
  //     const updates = {
  //       id: user.id,
  //       username: 'Lucas',
  //       updated_at: new Date(),
  //     };
  //     let {error} = await supabase.from('profiles').upsert(updates);
  //     if (error) {
  //       throw error;
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // },
};
