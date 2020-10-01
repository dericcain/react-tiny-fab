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
  },
};
