const path = require('path');

// Webpack configuration.
module.exports = {
  mode: 'development',
  entry: {
    scripts: './scripts.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: { extensions: ['.ts', '.js'] },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    forceAllTransforms: true,
                    corejs: '3',
                    useBuiltIns: 'entry',
                    targets: {
                      browsers: 'last 2 versions',
                      ie: '11',
                    },
                  },
                ],
                ['@babel/preset-typescript'],
              ],
              plugins: [
                ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-transform-runtime',
              ],
            },
          },
          'eslint-loader',
        ],
      },
    ],
  },
};