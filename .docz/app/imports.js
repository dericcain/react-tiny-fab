export const imports = {
  'src/example.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-example" */ 'src/example.mdx'
    ),
}
