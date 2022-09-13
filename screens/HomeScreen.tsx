import {StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import NotesList from '../components/NotesList';
import {AppText, AppView} from '../components/Themed';
import {RootTabScreenProps} from '../types';

export default function HomeScreen({navigation}: RootTabScreenProps<'TabOne'>) {
  return (
    <AppView style={styles.container}>
      <NotesList />
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
