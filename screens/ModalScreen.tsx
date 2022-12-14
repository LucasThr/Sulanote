import {StatusBar} from 'expo-status-bar';
import {Platform, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {AppText, AppView} from '../components/Themed';

export default function ModalScreen() {
  return (
    <AppView style={styles.container}>
      <AppText style={styles.title}>Modal</AppText>
      <AppView
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
