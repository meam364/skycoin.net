import palx from 'palx';
import moment from 'moment';

export const DISTRIBUTION_START = moment('2017-08-08T12:00:00.000Z');
export const DISTRIBUTION_END = moment('2017-08-31T12:00:00.000Z');
export const COLORS = palx('#0072FF');
export const SPACE = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72];
export const FONT_SIZES = [11, 13, 14, 15, 17, 20, 24, 28, 36, 40];
export const COLORS_NEW = {
  black: '#2A2D32',
  trueWhite: '#fff',
  primary: '#1D5FFF',
  lightPrimary: '#00C4FF',
  gold: '#FFC200',
  success: '#00FF94',
  error: '#FF003B',
  white: '#FBFBFB',
  gray: '#D2D3D4',
  lightGray: '#F3F4F4',
  darkGray: '#787A7D',
};

export const BREAKPOINTS = {
  sm: 40,
  md: 52,
  lg: 67,
};

export const FONT_FAMILIES = {
  mono: '"Inconsolata", monospace, sans-serif',
  sans: '"SkycoinSans", sans-serif',
};

export const BORDER_RADIUS = {
  base: '4px',
  pill: '180px',
};

export const BOX_SHADOWS = {
  base: '0 1px 2px rgba(0, 0, 0, 0.25)',
  hover: '0 1px 4px rgba(0, 0, 0, 0.25)',
};

export const FLAGS = {
  chinese: true,
  russian: true,
  korean: true,
  timeline: false,
  distribution: true,
  network: false,
};
