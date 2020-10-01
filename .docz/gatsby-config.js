const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/react-tiny-fab/',

  siteMetadata: {
    title: 'React Tiny Fab',
    description: 'A tiny Floating Action Button for React.',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: { colors: { primary: '#73A0D4' } },
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/dericcain/Code/react-tiny-fab-ts/.docz',
        base: '/react-tiny-fab/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: './docs',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Tiny Fab',
        description: 'A tiny Floating Action Button for React.',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/dericcain/Code/react-tiny-fab-ts',
          templates:
            '/Users/dericcain/Code/react-tiny-fab-ts/node_modules/docz-core/dist/templates',
          docz: '/Users/dericcain/Code/react-tiny-fab-ts/.docz',
          cache: '/Users/dericcain/Code/react-tiny-fab-ts/.docz/.cache',
          app: '/Users/dericcain/Code/react-tiny-fab-ts/.docz/app',
          appPackageJson:
            '/Users/dericcain/Code/react-tiny-fab-ts/package.json',
          appTsConfig: '/Users/dericcain/Code/react-tiny-fab-ts/tsconfig.json',
          gatsbyConfig:
            '/Users/dericcain/Code/react-tiny-fab-ts/gatsby-config.js',
          gatsbyBrowser:
            '/Users/dericcain/Code/react-tiny-fab-ts/gatsby-browser.js',
          gatsbyNode: '/Users/dericcain/Code/react-tiny-fab-ts/gatsby-node.js',
          gatsbySSR: '/Users/dericcain/Code/react-tiny-fab-ts/gatsby-ssr.js',
          importsJs:
            '/Users/dericcain/Code/react-tiny-fab-ts/.docz/app/imports.js',
          rootJs: '/Users/dericcain/Code/react-tiny-fab-ts/.docz/app/root.jsx',
          indexJs:
            '/Users/dericcain/Code/react-tiny-fab-ts/.docz/app/index.jsx',
          indexHtml:
            '/Users/dericcain/Code/react-tiny-fab-ts/.docz/app/index.html',
          db: '/Users/dericcain/Code/react-tiny-fab-ts/.docz/app/db.json',
        },
        hashRouter: true,
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
