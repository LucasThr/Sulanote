import {StyleSheet} from 'react-native';
import AddNote from '../components/AddNote';

import EditScreenInfo from '../components/EditScreenInfo';
import MainHeader from '../components/MainHeader';
import NotesList from '../components/NotesList';
import ScreenContainer from '../components/ScreenContainer';
import {AppText, AppView} from '../components/Themed';
import {RootTabScreenProps} from '../types';

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
  return (
    <ScreenContainer>
      <MainHeader />
      <NotesList />
      <AddNote />
    </ScreenContainer>
  );
}
