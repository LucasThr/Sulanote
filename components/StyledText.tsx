import {AppText, TextProps} from './Themed';

export function MonoAppText(props: TextProps) {
  return (
    <AppText {...props} style={[props.style, {fontFamily: 'space-mono'}]} />
  );
}
