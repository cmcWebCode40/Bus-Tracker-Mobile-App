import {colors} from '../constants';

export const theme = {
  colors,
  fonts: {
    AvertaBlack: 'Averta-Black',
    AvertaBlackItalic: 'Averta-BlackItalic',
    AvertaBold: 'Averta-Bold',
    AvertaBoldItalic: 'Averta-BoldItalic',
    AvertaExtraBold: 'Averta-ExtraBold',
    AvertaExtraBoldItalic: 'Averta-ExtraBoldItalic',
    AvertaExtraThin: 'Averta-Extrathin',
    AvertaExtrathinItalic: 'Averat-ExtrathinItalic',
    AvertaLight: 'Averta-Light',
    AvertaLightItalic: 'Averta-LightItalic',
    AvertaRegular: 'Averta-Regular',
    AvertaRegularItalic: 'Averta-RegularItalic',
    AvertaSemibold: 'Averta-Semibold',
    AvertaSemiboldItalic: 'Averta-SemiboldItalic',
    AvertaThin: 'Averta-Thin',
    AvertaThinItalic: 'Averta-ThinItalic',
  },
  spacing: {
    xs: 4,
    sm: 8,
    m: 16,
    lg: 24,
    xl: 36,
    xxl: 40,
  },
  fontSize: {
    s: 12,
    m: 14,
    l: 16,
    xl: 20,
    xxl: 28,
    xxxl: 36,
  },
  radius: {
    none: 0,
    sm: 2,
    rounded: 4,
    md: 6,
    lg: 8,
    xl: 12,
    xxl: 16,
    xxxl: 24,
    full: 9999,
  },
};

export type Theme = typeof theme;
