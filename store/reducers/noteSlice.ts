import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';

export interface INote {
  id: number;
  title: string;
  text: string;
}

type INotes = INote[];

interface NoteState {
  numberOfNotes: number;
  notes: INotes;
}

const defaultState: NoteState = {
  numberOfNotes: 1,
  notes: [
    {
      id: 1,
      title: 'Mémo 1',
      text: 'text persist',
    },
  ],
};

const noteSlice = createSlice({
  name: 'notes',
  initialState: defaultState,
  reducers: {
    editNote: (state: INote, action) => {
      let notes = state.notes;
      let index = notes.findIndex((note) => note.id === action.payload.id);
      console.log('index', index);
      if (index === -1) return;
      console.log('action.payload.note', action.payload.note);
      notes[index] = action.payload.note;
      console.log('notes', notes);
      notes = notes.sort((noteA, noteB) => noteB.date - noteA.date);

      state.notes = notes;
    },
    addNote: (state: INote, action) => {
      let notes = state.notes;
      console.log('first', action.payload.title);
      let note = {
        id: state.numberOfNotes + 1,
        title: action.payload.title,
        text: action.payload.text,
        date: action.payload.date,
        color: action.payload.color,
      };
      notes.push(note);
      console.log('notes', notes);
      notes = notes.sort((noteA, noteB) => noteB.date - noteA.date);
      state.notes = notes;
      state.numberOfNotes += 1;
    },
    deleteNotes: (state: INote, action) => {
      state.notes = [];
      state.numberOfNotes = 1;
    },
    deleteNote: (state: INote, action) => {
      let notes = state.notes;
      notes = notes.filter((note) => note.id !== action.payload.id);
      state.notes = notes;
    },
  },
});

export const {editNote, addNote, deleteNotes, deleteNote} = noteSlice.actions;

export default noteSlice.reducer;
