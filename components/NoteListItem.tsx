import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Layout from '../constants/Layout';
import {AppText} from './Themed';
import useColorScheme from '../hooks/useColorScheme';
import {useNavigation, useTheme} from '@react-navigation/native';

type Props = {
  id: number;
  title: string;
  color: string;
};

const NoteListItem = ({id, title, color}: Props) => {
  const {colors} = useTheme();
  const {width, height} = Layout.window;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Note')}
      style={{
        height: 160,
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 8,
        flex: 1,
        marginRight: id % 2 === 0 ? 4 : 0,
        marginLeft: id % 2 !== 0 ? 4 : 0,
        backgroundColor: colors[color],
      }}>
      <View>
        <AppText onlyLight style={{fontSize: 18}}>
          {title}
        </AppText>
        <AppText onlyLight>text</AppText>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppText onlyLight style={{fontSize: 11}}>
          Autres
        </AppText>
        <AppText onlyLight style={{fontSize: 11}}>
          14 Sept 2022
        </AppText>
      </View>
    </Pressable>
  );
};

export default NoteListItem;
