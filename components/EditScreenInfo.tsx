import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';
import {MonoText} from './StyledText';
import {AppText, AppView} from './Themed';

export default function EditScreenInfo({path}: {path: string}) {
  return (
    <AppView>
      <AppText style={{fontSize: 26}}>Categories</AppText>
    </AppView>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet',
  );
}
