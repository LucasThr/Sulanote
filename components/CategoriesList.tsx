import {View, FlatList} from 'react-native';
import React from 'react';
import {AppText} from '../components/Themed';
import CategoryItem from './CategoryItem';

type Props = {};

const CategoriesList = (props: Props) => {
  const renderItem = ({item}) => {
    return <CategoryItem item={item} />;
  };

  return (
    <View style={{flex: 1}}>
      <AppText style={{fontSize: 26}}>Categories List</AppText>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        data={[{name: 'albums-outline'}, {name: 'bulb-outline'}]}
      />
    </View>
  );
};

export default CategoriesList;
