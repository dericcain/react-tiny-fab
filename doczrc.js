/* eslint-disable */
import { css } from 'docz-plugin-css';

export default {
  dest: './docs',
  hashRouter: true,
  base: '/react-tiny-fab/',
  plugins: [
    css({
      preprocessor: 'sass',
    }),
  ],
  themeConfig: {
    colors: {
      primary: '#73A0D4',
    },
  },
};
