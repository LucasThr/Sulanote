import {View, Text} from 'react-native';
import React from 'react';
import {AppText, AppView} from '../Themed';
import AppInput from '../AppInput';
import AppAreaInput from '../AppAreaInput';

type Props = {};

const NoteContainer = (props: Props) => {
  return (
    <AppView style={{padding: 16}}>
      <AppInput style={{fontSize: 32, marginBottom: 15}} />
      <AppAreaInput />
    </AppView>
  );
};

export default NoteContainer;
