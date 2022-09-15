import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

type Props = {
  placeholder?: string;
  value: string;
  style?: any;
};

const AppAreaInput = ({placeholder, value, style}: Props) => {
  const [text, onChangeText] = React.useState('');
  const {colors} = useTheme();
  const color = colors.text;
  return (
    <TextInput
      style={[{color, fontSize: 18}, style]}
      placeholderTextColor={colors.text + '55'}
      multiline
      onChangeText={onChangeText}
      value={text}
      placeholder=""
    />
  );
};

export default AppAreaInput;
