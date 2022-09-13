import {View, Text} from 'react-native';
import React from 'react';
import NoteHeader from '../components/Note/NoteHeader';
import NoteContainer from '../components/Note/NoteContainer';

type Props = {};

const NoteScreen = (props: Props) => {
  return (
    <View>
      <NoteHeader />
      <NoteContainer />
    </View>
  );
};

export default NoteScreen;
