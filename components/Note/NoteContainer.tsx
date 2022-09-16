import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {AppText, AppView} from '../Themed';
import AppInput from '../AppInput';
import AppAreaInput from '../AppAreaInput';
import {INote} from '../../types';

export type Props = {
  title: string;
  text: string;
  isNew: boolean;
  setTitle: Function;
  setText: Function;
};

const NoteContainer = ({title, text, setText, setTitle, isNew}: Props) => {
  return (
    <ScrollView>
      <AppView style={{padding: 16}}>
        <AppInput
          value={title}
          style={{fontSize: 32, marginBottom: 15}}
          onChangeText={setTitle}
        />
        <AppAreaInput value={text} onChangeText={setText} />
      </AppView>
    </ScrollView>
  );
};

export default NoteContainer;
