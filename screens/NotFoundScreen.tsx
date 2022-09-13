import {StyleSheet, TouchableOpacity} from 'react-native';

import {AppText, AppView} from '../components/Themed';
import {RootStackScreenProps} from '../types';

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<'NotFound'>) {
  return (
    <AppView style={styles.container}>
      <AppText style={styles.title}>This screen doesn't exist.</AppText>
      <TouchableOpacity
        onPress={() => navigation.replace('Root')}
        style={styles.link}>
        <AppText style={styles.linkAppText}>Go to home screen!</AppText>
      </TouchableOpacity>
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
