const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === 'development';

const config = {
  mode: 'development',
  entry: {
    index: './src/js/entries/index.js',
    advantages: './src/js/entries/advantages.js',
    about: './src/js/entries/about.js',
    questions: './src/js/entries/questions.js',
    support: './src/js/entries/support.js',
    notFound: './src/js/entries/notFound.js',
    serverError: './src/js/entries/serverError.js',
    policy: './src/js/entries/policy.js',
    instructions: './src/js/entries/instructions.js',
    partners: './src/js/entries/partners.js',
    rates: './src/js/entries/rates.js',
    lkProfile: './src/js/entries/lkProfile.js',
    lkCompany: './src/js/entries/lkCompany.js',
    lkProgram: './src/js/entries/lkProgram.js',
    lk: './src/js/entries/lk.js',
    router: './src/js/router.ts'
  },
  output: {
    path: path.resolve(__dirname, '..', 'myoffice', 'static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  //devtool: 'source-map',
  optimization: {
    namedModules: true,
    namedChunks: true,
    splitChunks: {
      chunks: 'async'
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      path.join(__dirname, '/'),
      'node_modules'
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'myoffice', 'static'),
    compress: true,
    writeToDisk: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|ico|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/static/images/',
              outputPath: '/images/',
              useRelativePath: false,
              esModule: false,
            }
          }
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
          },
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 'css-loader']
      },
      {
        test: /\.(eot|ttf|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              esModule: false,
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      filename: 'index.html',
      chunks: ['index', 'Header']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/advantages.html',
      filename: 'advantages.html',
      chunks: ['advantages']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/questions.html',
      filename: 'questions.html',
      chunks: ['questions']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/support.html',
      filename: 'support.html',
      chunks: ['support']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/notFound.html',
      filename: 'notFound.html',
      chunks: ['notFound']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/serverError.html',
      filename: 'serverError.html',
      chunks: ['serverError']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/policy.html',
      filename: 'policy.html',
      chunks: ['policy']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/instructions.html',
      filename: 'instructions.html',
      chunks: ['instructions']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/partners.html',
      filename: 'partners.html',
      chunks: ['partners']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/rates.html',
      filename: 'rates.html',
      chunks: ['rates']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/lkProfile.html',
      filename: 'lkProfile.html',
      chunks: ['lkProfile']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/lkCompany.html',
      filename: 'lkCompany.html',
      chunks: ['lkCompany']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/lkProgram.html',
      filename: 'lkProgram.html',
      chunks: ['lkProgram']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/lk.html',
      filename: 'lk.html',
      chunks: ['lk']
    }),
    new WebpackMd5Hash(),
  ]
};

module.exports = () => {
  return config
};