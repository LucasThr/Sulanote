import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import NoteListItem from './NoteListItem';
import {AppText} from './Themed';
import {notesService} from '../services/notes.service';
import {useSelector, useDispatch} from 'react-redux';

type Props = {};

const NotesList = (props: Props) => {
  // const [notes, setNotes] = useState(undefined);
  const notes = useSelector((state: any) => state.notes.notes);

  const renderItem = ({item}) => {
    return <NoteListItem id={item.id} note={item} color={item.color} />;
  };
  return (
    <View style={{paddingHorizontal: 8, flex: 1}}>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        data={notes}
      />
    </View>
  );
};

export default NotesList;
