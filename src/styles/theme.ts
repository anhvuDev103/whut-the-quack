import { Interpolation } from 'styled-components';

type Mode = 'dark' | 'light';

export type InterpolationMapped<K extends string | number | symbol> = {
  [key in K]: Interpolation<object>;
};

export const getDesignTokens = (mode: Mode) => {
  const getColor = (lightColor: string, darkColor: string) =>
    mode === 'light' ? lightColor : darkColor;

  return {
    palette: {
      common: {
        white: '#ffffff',
        white20: '#ffffff33',
        white40: '#ffffff66',
        white60: '#ffffff99',
        black: '#000000',
        black05: '#0000000d',
        black10: '#0000001a',
        black60: '#00000099',
        muted: '#00000040',
      },
      success: {
        main: getColor('#4edb95', ''),
        hover: getColor('#4edb9599', ''),
        contrast: getColor('#000000', ''),
        '60': getColor('#4edb9599', ''),
      },
      warning: {
        main: getColor('#ffca02', ''),
        hover: getColor('#ffca0299', ''),
        contrast: getColor('#000000', ''),
      },
      info: {
        main: getColor('#4dd0e2', ''),
        hover: getColor('#4dd0e299', ''),
        contrast: getColor('#ffffff', ''),
      },
      danger: {
        main: getColor('#ff5a58', ''),
        hover: getColor('#ff5a5899', ''),
        contrast: getColor('#ffffff', ''),
      },
      disabled: {
        main: getColor('#e5e5e5', ''),
        hover: getColor('#e5e5e599', ''),
        contrast: getColor('#8b8b8b', ''),
      },
      background: {
        default: getColor('#8c87c3', ''),
        paper: getColor('#ffffff', ''),
      },
      border: {
        main: getColor('#000000', ''),
      },
    },
    boxShadow: {
      main: 'inset 0 -4px 0 0 #00000040',
    },
    typography: {
      bold12: {
        fontSize: '1.2rem',
        fontWeight: '700',
      },
      semi12: {
        fontSize: '1.2rem',
        fontWeight: '600',
      },
      medium12: {
        fontSize: '1.2rem',
        fontWeight: '500',
      },
      light12: {
        fontSize: '1.2rem',
        fontWeight: '400',
      },
      bold14: {
        fontSize: '1.4rem',
        fontWeight: '700',
      },
      semi14: {
        fontSize: '1.4rem',
        fontWeight: '600',
      },
      medium14: {
        fontSize: '1.4rem',
        fontWeight: '500',
      },
      light14: {
        fontSize: '1.4rem',
        fontWeight: '400',
      },
      bold16: {
        fontSize: '1.6rem',
        fontWeight: '700',
      },
      semi16: {
        fontSize: '1.6rem',
        fontWeight: '600',
      },
      medium16: {
        fontSize: '1.6rem',
        fontWeight: '500',
      },
      light16: {
        fontSize: '1.6rem',
        fontWeight: '400',
      },
      bold20: {
        fontSize: '2rem',
        fontWeight: '700',
      },
      semi20: {
        fontSize: '2rem',
        fontWeight: '600',
      },
      medium20: {
        fontSize: '2rem',
        fontWeight: '500',
      },
      light20: {
        fontSize: '2rem',
        fontWeight: '400',
      },
      bold24: {
        fontSize: '2.4rem',
        fontWeight: '700',
      },
      semi24: {
        fontSize: '2.4rem',
        fontWeight: '600',
      },
      medium24: {
        fontSize: '2.4rem',
        fontWeight: '500',
      },
      light24: {
        fontSize: '2.4rem',
        fontWeight: '400',
      },
    },
  };
};

export type Theme = ReturnType<typeof getDesignTokens>;
