const typescript = require('@rollup/plugin-typescript')
const json = require('@rollup/plugin-json')

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node',
  },
  plugins: [typescript(),json()],
}
