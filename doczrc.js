/* eslint-disable */
import { css } from 'docz-plugin-css';

export default {
  dest: './docs',
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
