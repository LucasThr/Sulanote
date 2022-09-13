import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

type Props = {
  placeholder?: string;
  value: string;
  style?: any;
};

const AppInput = ({placeholder, value, style}: Props) => {
  const [text, onChangeText] = React.useState('Title');
  const {colors} = useTheme();
  const color = colors.text;
  return (
    <TextInput
      style={[{color, fontSize: 14}, style]}
      onChangeText={onChangeText}
      value={text}
      placeholder="useless placeholder"
    />
  );
};

export default AppInput;
