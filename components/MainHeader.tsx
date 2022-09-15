import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {AppText} from './Themed';
import {useTheme} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import {supabase} from '../supabaseClient';

type Props = {};

const MainHeader = (props: Props) => {
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
        <AppText style={{fontSize: 24}}>Home</AppText>
        <Pressable
          onPress={async () => {
            const {error} = await supabase.auth.signOut();
          }}>
          <Ionicons name="log-out-outline" size={36} />
        </Pressable>
      </View>
    </View>
  );
};

export default MainHeader;
