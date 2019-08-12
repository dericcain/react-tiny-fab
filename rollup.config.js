import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postCss from 'rollup-plugin-postcss';
import bundleSize from 'rollup-plugin-bundle-size';
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy-glob';

import pkg from './package.json';

const isWatching = () => process.env.WATCH;

const plugins = [
  resolve(),
  commonjs({
    include: 'node_modules/**',
    extensions: ['.jsx', '.js'],
  }),
  babel(),
  postCss({
    extensions: ['.sass'],
    extract: isWatching() ? 'example/styles.css' : 'dist/styles.css',
    minimize: false,
  }),
  cleanup(),
  bundleSize(),
  !isWatching() && copy([
    { files: 'src/*.d.ts', dest: './dist' }
  ])
];

const banner = `/****  React Tiny FAB - Deric Cain<deric.cain@gmail.com>  *****/`;

export default {
  input: 'src/index.jsx',
  external: ['react', 'react-dom'],
  output: isWatching()
    ? {
        file: 'example/fab.js',
        format: 'umd',
        name: 'ReactTinyFab',
        globals: { React: 'react', ReactDOM: 'react-dom' },
      }
    : [{ file: pkg.main, format: 'cjs', banner }, { file: pkg.module, format: 'es', banner }],
  plugins,
};
