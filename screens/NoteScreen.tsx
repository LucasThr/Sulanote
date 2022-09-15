import {View, Text} from 'react-native';
import React from 'react';
import NoteHeader from '../components/Note/NoteHeader';
import NoteContainer from '../components/Note/NoteContainer';
import ScreenContainer from '../components/ScreenContainer';

type Props = {};

const NoteScreen = (props: Props) => {
  return (
    <ScreenContainer>
      <NoteHeader />
      <NoteContainer />
    </ScreenContainer>
  );
};

export default NoteScreen;
