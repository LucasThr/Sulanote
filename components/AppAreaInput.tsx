import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

type Props = {
  placeholder?: string;
  value: string;
  style?: any;
};

const AppAreaInput = ({placeholder, value, style}: Props) => {
  const [text, onChangeText] = React.useState('Title');
  const {colors} = useTheme();
  const color = colors.text;
  return (
    <TextInput
      style={[{color, fontSize: 20}, style]}
      multiline
      onChangeText={onChangeText}
      value={text}
      placeholder="useless placeholder"
    />
  );
};

export default AppAreaInput;
