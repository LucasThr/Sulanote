import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {AppText} from '../Themed';
import {LightTheme} from '../../constants/Colors';
import {useNavigation, useTheme} from '@react-navigation/native';
import NoteContainer from './NoteContainer';
import {Ionicons} from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
type Props = {
  save: Function;
  isSave: boolean;
};

const NoteHeader = ({save, isSave}: Props) => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: colors.text,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 80,
          backgroundColor: colors.background,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <Pressable
          onPress={() => {
            Haptics.selectionAsync();
            navigation.goBack();
          }}
          hitSlop={14}
          style={({pressed}) => [
            {
              backgroundColor: colors.text,
              padding: 6,
              borderRadius: 10,
              opacity: pressed ? 0.6 : 1,
            },
          ]}>
          <Ionicons
            name="arrow-back-outline"
            size={22}
            color={colors.background}
          />
        </Pressable>
        <AppText style={{fontSize: 24}}>Edit</AppText>
        <Pressable
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            save();
          }}
          hitSlop={14}
          style={({pressed}) => [
            {
              backgroundColor: colors.text,
              padding: 6,
              borderRadius: 10,
              opacity: pressed ? 0.6 : 1,
            },
          ]}>
          <Ionicons
            name="checkmark"
            size={22}
            color={isSave ? colors.lightGreen : colors.background}
          />
        </Pressable>
      </View>
      <View
        style={{
          zIndex: 10,
          height: 20,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          elevation: 3,
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
          zIndex: -10,
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
