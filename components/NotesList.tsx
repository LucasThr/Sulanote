import {View, Text, FlatList} from 'react-native';
import React from 'react';
import NoteListItem from './NoteListItem';
import {AppText} from './Themed';

type Props = {};

const NotesList = (props: Props) => {
  const renderItem = ({item}) => {
    return <NoteListItem id={item.id} title={item.title} color={item.color} />;
  };
  return (
    <View style={{paddingHorizontal: 8}}>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <AppText style={{fontSize: 20}}>HomeNoteList</AppText>
      </View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        data={[
          {id: 0, title: 'albums-outline', color: 'latte'},
          {id: 1, title: 'bulb-outline', color: 'lightGreen'},
        ]}
      />
    </View>
  );
};

export default NotesList;
