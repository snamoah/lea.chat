/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const copyWebpackPlugin = require('copy-webpack-plugin')

const outputDir = './build'

module.exports = (env) => {
  const isDev = !(env && env.production)

  return [
    {
      entry: './src/index.ts',
      output: {
        filename: 'main.js',
        path: resolve(__dirname, outputDir),
        clean: true,
      },
      devServer: {
        contentBase: outputDir,
      },
      plugins: isDev
        ? [
            new copyWebpackPlugin({
              patterns: [
                {
                  from: 'public/',
                },
              ],
            }),
          ]
        : [],
      optimization: {
        minimize: !isDev,
      },
      mode: isDev ? 'development' : 'production',
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              {
                loader: 'style-loader',
                options: { injectType: 'singletonStyleTag' },
              },
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[name]-[local]-[hash:base64:5]',
                  },
                  sourceMap: isDev,
                },
              },
            ],
          },
          {
            test: /\.(js|ts|tsx|jsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env'],
                    [
                      '@babel/preset-typescript',
                      {
                        jsxPragma: 'h',
                      },
                    ],
                  ],
                  plugins: [
                    [
                      '@babel/plugin-transform-react-jsx',
                      {
                        pragma: 'h',
                        pragmaFrag: 'Fragment',
                      },
                    ],
                  ],
                },
              },
            ],
          },
        ],
      },
      resolve: {
        extensions: ['*', '.js', '.ts', '.tsx'],
      },
    },
  ]
}
