import {View, Text} from 'react-native';
import React from 'react';
import {AppText} from '../Themed';
import {LightTheme} from '../../constants/Colors';
import {useTheme} from '@react-navigation/native';
import NoteContainer from './NoteContainer';

type Props = {};

const NoteHeader = (props: Props) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: colors.text,
      }}>
      <View
        style={{
          height: 100,
          backgroundColor: colors.background,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <AppText>NoteHeader</AppText>
      </View>
      <View
        style={{
          height: 20,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          elevation: 2,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 30,
            width: 15,
            backgroundColor: '#5b5b5b',
            elevation: 5,
            borderRadius: 3,
          }}
        />
        <View
          style={{
            height: 30,
            width: 15,
            backgroundColor: '#5b5b5b',
            elevation: 5,
            borderRadius: 3,
          }}
        />
        <View
          style={{
            height: 30,
            width: 15,
            backgroundColor: '#5b5b5b',
            elevation: 5,
            borderRadius: 3,
          }}
        />
      </View>
      <View
        style={{
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 20,
          backgroundColor: colors.background,
        }}
      />
    </View>
  );
};

export default NoteHeader;
