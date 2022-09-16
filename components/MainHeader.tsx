import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {AppText} from './Themed';
import {useTheme} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import {supabase} from '../supabaseClient';

type Props = {deleteNotes: Function};

const MainHeader = ({deleteNotes}: Props) => {
  const {colors} = useTheme();
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
        }}>
        <AppText style={{fontSize: 32}}>Notes</AppText>
        <Pressable
          onPress={async () => {
            // const {error} = await supabase.auth.signOut();
            deleteNotes();
          }}>
          <Ionicons name="trash-outline" size={30} />
        </Pressable>
      </View>
    </View>
  );
};

export default MainHeader;
