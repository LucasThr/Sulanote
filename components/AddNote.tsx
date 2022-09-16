import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

type Props = {addNote: Function};

const AddNote = ({addNote}: Props) => {
  const {colors} = useTheme();
  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        addNote();
      }}
      style={({pressed}) => [
        {
          position: 'absolute',
          bottom: 20,
          height: 48,
          width: 48,
          right: 20,
          borderRadius: 999,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.text,
          opacity: pressed ? 0.6 : 1,
        },
      ]}>
      <Ionicons name="add" color={colors.background} size={35} />
    </Pressable>
  );
};

export default AddNote;
