import {supabase} from '../supabaseClient';

export const notesService = {
  async getAllNotes(userID: string) {
    console.log('userIDs', userID);
    let {data, error, status} = await supabase
      .from('notes')
      .select(`id,title,text, created_at,profiles!inner(*)`)
      .eq('profiles.id', userID);

    if (error) {
      console.error('[getAllNotes]', error);
      return null;
    }
    return data;
  },
  getAllNotesByFolder(userID: string, folder_id: number) {},
  getAllFolder(userID: string) {},
  async getNote(noteID: number) {
    let {data, error, status} = await supabase
      .from('notes')
      .select(`id,title,text, created_at`)
      .eq('id', noteID)
      .single();

    if (error) {
      console.error('[getAllNotes]', error);
      return null;
    }
    return data;
  },
  async editNote(noteID: number, note: any) {
    const {data, error} = await supabase
      .from('notes')
      .update({title: note.title, text: note.text})
      .match({id: noteID});
    return error;
  },
  addNote(userID: string) {},
  subscribeNotes() {
    const mySubscription = supabase
      .from('notes')
      .on('*', (payload) => {
        console.log('Change received!', payload);
      })
      .subscribe();
  },
};
