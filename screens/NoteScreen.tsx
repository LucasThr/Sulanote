import {View, Text, Alert, BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';
import NoteHeader from '../components/Note/NoteHeader';
import NoteContainer from '../components/Note/NoteContainer';
import ScreenContainer from '../components/ScreenContainer';
import {useStore} from '../store';
import {notesService} from '../services/notes.service';
import {INote} from '../types';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {addNote, editNote} from '../store/reducers/noteSlice';
import {notesColors} from '../constants/Colors';

type Props = {};

const NoteScreen = (props: Props) => {
  const {id, note, isNew} = props.route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {colors} = useTheme();

  // const [note, setNote] = useState<undefined | null | INote>(undefined);
  const [title, setTitle] = useState<undefined | null | string>(
    note?.title || undefined,
  );
  const [text, setText] = useState<undefined | null | string>(
    note?.text || undefined,
  );
  const [isSave, setIsSave] = useState<boolean>(false);

  const saveNote = async () => {
    if (isNew) {
      dispatch(
        addNote({
          title,
          text,
          date: moment().valueOf(),
          color:
            colors[notesColors[Math.floor(Math.random() * notesColors.length)]],
        }),
      );
    } else {
      dispatch(
        editNote({
          id: id,
          note: {
            title,
            text,
            color: note.color,
            date: moment().valueOf(),
          },
        }),
      );
    }
  };

  return (
    <ScreenContainer>
      <NoteHeader isSave={isSave} save={saveNote} />
      <NoteContainer
        isNew={isNew}
        title={title}
        text={text}
        setText={(t) => {
          setText(t);
          setIsSave(false);
        }}
        setTitle={(t) => {
          setTitle(t);
          setIsSave(false);
        }}
      />
    </ScreenContainer>
  );
};

export default NoteScreen;
