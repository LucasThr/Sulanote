import {View} from 'react-native';
import React from 'react';
import Layout from '../constants/Layout';
import {Ionicons} from '@expo/vector-icons';
import {AppText} from './Themed';

type Props = {
  name: string;
};

const CategoryItem = ({item}: Props) => {
  return (
    <View
      style={{
        height: Layout.window.width / 3,
        width: Layout.window.width / 2.3,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Ionicons name={item.name} size={50} />
      <AppText>All</AppText>
    </View>
  );
};

export default CategoryItem;
