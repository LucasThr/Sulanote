import {StyleSheet} from 'react-native';
import CategoriesList from '../components/CategoriesList';

import EditScreenInfo from '../components/EditScreenInfo';
import {AppText, AppView} from '../components/Themed';

export default function CategoryScreen() {
  return (
    <AppView style={styles.container}>
      <AppText style={styles.title}>Category</AppText>
      <AppView
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <CategoriesList />
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
