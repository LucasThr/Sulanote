import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import AddNote from '../components/AddNote';

import EditScreenInfo from '../components/EditScreenInfo';
import MainHeader from '../components/MainHeader';
import NotesList from '../components/NotesList';
import ScreenContainer from '../components/ScreenContainer';
import {AppText, AppView} from '../components/Themed';
import {addNote, deleteNotes} from '../store/reducers/noteSlice';
import {RootTabScreenProps} from '../types';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <MainHeader
        deleteNotes={() => {
          dispatch(deleteNotes());
        }}
      />
      <NotesList />
      <AddNote
        addNote={() => {
          navigation.navigate('Note', {isNew: true});
          // dispatch(addNote());
        }}
      />
    </ScreenContainer>
  );
}
