import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

type Props = {
  placeholder?: string;
  value: string;
  style?: any;
  onChangeText: Function;
};

const AppInput = ({placeholder, value, style, onChangeText}: Props) => {
  const {colors} = useTheme();
  const color = colors.text;
  return (
    <TextInput
      style={[{color, fontSize: 14}, style]}
      onChangeText={onChangeText}
      value={value}
      autoFocus
      placeholder="Title"
    />
  );
};

export default AppInput;
