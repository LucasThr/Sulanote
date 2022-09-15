import {setupURLPolyfill} from 'react-native-url-polyfill';
import {createClient} from '@supabase/supabase-js';
import {SUPABASE_URL, SUPABASE_ANON_KEY} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

setupURLPolyfill();
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    detectSessionInUrl: false,
    storage: AsyncStorage,
  },
});
