// Modules
const autoprefixer = require('autoprefixer')
const webpack = require('webpack');
const path = require('path');

// Webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');


const loaders = {
  css: {
    loader: 'css-loader',
    options: { minimize: true }
  },

  postcss: {
    loader: 'postcss-loader',
    options: {
      plugins: (loader) => [
        autoprefixer({
          browsers: ['last 2 versions']
        })
      ]
    }
  },

  sass: {
    loader: 'sass-loader',
    options: {
      indentedSyntax: true,
      includePaths: [path.resolve(__dirname, './src')]
    }
  }
}

module.exports = {
  entry: {
    app: ['./src/index.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', 
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [loaders.css, loaders.postcss, loaders.sass]
        })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new ExtractTextPlugin('[name].bundle.css'),
    new CssoWebpackPlugin({ pluginOutputPostfix: 'min' })
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/"
  },

  resolve: {
    extensions: ['.js', '.sass'],
    modules: [path.join(__dirname, './src'), 'node_modules']
  }
};
