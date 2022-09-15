import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
type Props = {
  children: any;
  style?: any;
};

const ScreenContainer = ({children, style}: Props) => {
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
          paddingTop: insets.top,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default ScreenContainer;
