const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const LightTheme = {
  dark: false,
  colors: {
    text: '#000',
    background: '#fff',
    lightGreen: '#e4ffe6',
    lightBlue: '#f2f7ff',
    pink: '#ffab91',
    latte: '#fef6e5',
    orange: '#ffcc80',
    cyan: '#81deea',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
};

export const DarkTheme = {
  dark: true,
  colors: {
    text: '#fff',
    background: '#000',
    lightGreen: '#e4ffe6',
    lightBlue: '#f2f7ff',
    pink: '#ffab91',
    latte: '#fef6e5',
    orange: '#ffcc80',
    cyan: '#81deea',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

export const notesColors = [
  'lightGreen',
  'latte',
  'lightBlue',
  'pink',
  'orange',
  'cyan',
];

export default {
  light: {
    text: '#000',
    background: '#fff',
    lightGreen: '#e4ffe6',
    latte: '#fef6e5',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    lightGreen: '#e4ffe6',
    latte: '#fef6e5',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
