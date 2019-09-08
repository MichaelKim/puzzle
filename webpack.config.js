const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const config = {
  entry: {
    main: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: [
          {
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
          },
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex]
            }
          },
          path.join(__dirname, './md-modules/md-loader')
        ]
      },
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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.png$/,
        use: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')
    }),
    new MiniCssExtractPlugin()
  ],
  stats: {
    colors: true
  }
};

if (process.env.NODE_ENV === 'production') {
  config.mode = 'production';
  // Basic options, except ignore console statements
  config.optimization = {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  };
  config.plugins.push(new BundleAnalyzerPlugin());
} else {
  config.mode = 'development';
  config.devtool = '#cheap-module-source-map';
  config.devServer = {
    contentBase: path.resolve('./build'),
    compress: true,
    port: 8000
  };
}

module.exports = config;
