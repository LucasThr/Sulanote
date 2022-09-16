import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {AppText, AppView} from '../Themed';
import AppInput from '../AppInput';
import AppAreaInput from '../AppAreaInput';
import {INote} from '../../types';
import {useTheme} from '@react-navigation/native';

export type Props = {
  title: string;
  text: string;
  isNew: boolean;
  setTitle: Function;
  setText: Function;
};

const NoteContainer = ({title, text, setText, setTitle, isNew}: Props) => {
  const {colors} = useTheme();
  return (
    <ScrollView>
      <AppView style={{padding: 16}}>
        <AppInput
          value={title}
          style={{fontSize: 32}}
          onChangeText={setTitle}
        />
        <View
          style={{
            height: 1,
            width: '80%',
            backgroundColor: colors.text,
            opacity: 0.1,
            marginTop: 15,
            marginBottom: 10,
          }}
        />
        <AppAreaInput value={text} onChangeText={setText} />
      </AppView>
    </ScrollView>
  );
};

export default NoteContainer;
