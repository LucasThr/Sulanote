import {View, Text, Pressable, Alert} from 'react-native';
import React from 'react';
import Layout from '../constants/Layout';
import {AppText} from './Themed';
import useColorScheme from '../hooks/useColorScheme';
import {useNavigation, useTheme} from '@react-navigation/native';
import {notesColors} from '../constants/Colors';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deleteNote} from '../store/reducers/noteSlice';

type Props = {
  id: number;
  note: any;
  color: string;
};

const NoteListItem = ({id, note, color}: Props) => {
  const {colors} = useTheme();
  const {width, height} = Layout.window;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log('note.created_at', note.date);
  return (
    <Pressable
      onLongPress={() => {
        Alert.alert('Delete', 'Do you want to delete this note ?', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => dispatch(deleteNote({id: id}))},
        ]);
      }}
      onPress={() => navigation.navigate('Note', {id: id, note: note})}
      style={{
        height: 160,
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 12,
        flex: 1,
        marginRight: 4,
        marginLeft: 4,
        marginBottom: 8,
        backgroundColor: color,
      }}>
      <View>
        <AppText onlyLight style={{fontSize: 22, paddingBottom: 2}}>
          {note.title}
        </AppText>
        <AppText numberOfLines={6} onlyLight>
          {note.text}
        </AppText>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        {/* <AppText onlyLight style={{fontSize: 11}}>
          Autres
        </AppText> */}
        <AppText onlyLight style={{fontSize: 11}}>
          {moment(note.date).format('L')}
        </AppText>
      </View>
    </Pressable>
  );
};

export default NoteListItem;
