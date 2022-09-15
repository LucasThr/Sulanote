import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';

type Props = {};

const AddNote = (props: Props) => {
  const {colors} = useTheme();
  return (
    <Pressable
      style={{
        position: 'absolute',
        bottom: 20,
        height: 48,
        width: 48,
        right: 20,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.text,
      }}>
      <Ionicons name="add" color={colors.background} size={35} />
    </Pressable>
  );
};

export default AddNote;
