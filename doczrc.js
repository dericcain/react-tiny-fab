export default {
  typescript: true,
  dest: './docs',
  hashRouter: true,
  base: '/react-tiny-fab/',
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
    }
  ],
  themeConfig: {
    initialColorMode: 'dark',
    colors: {
      primary: '#73A0D4',
    },
    fontSizes: [10, 12, 14, 17, 20, 28, 36, 52]
  },
};
