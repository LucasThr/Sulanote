/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {useTheme} from '@react-navigation/native';
import {Text as DefaultText, View as DefaultView} from 'react-native';

import Colors, {LightTheme} from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: {light?: string; dark?: string},
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  onlyLight?: boolean;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function AppText(props: TextProps) {
  const {style, lightColor, darkColor, onlyLight, ...otherProps} = props;
  // const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');
  const {colors} = useTheme();
  let color = onlyLight ? LightTheme.colors.text : colors.text;
  return <DefaultText style={[{color}, style]} {...otherProps} />;
}

export function AppView(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}
