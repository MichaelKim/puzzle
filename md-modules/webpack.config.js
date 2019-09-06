const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname, 'md-loader.js'),
  output: {
    library: 'md-loader',
    libraryTarget: 'commonjs2',
    path: __dirname,
    filename: 'index.js'
  },
  module: {
    noParse: /react|katex/,
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: '>1%, not ie 11, not op_mini all'
                }
              ],
              '@babel/preset-react',
              '@babel/preset-flow'
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  stats: {
    colors: true
  },
  mode: 'development'
};
