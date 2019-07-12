// node-resolve will resolve all the node dependencies
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  output: {
    file: 'dist/esm/bundle.js',
    format: 'esm'
  },
  // All the used libs needs to be here

  external: [
    'react'
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]

}
