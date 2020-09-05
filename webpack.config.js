const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: {
    main: './src/js/index.js',
    advantages: './src/js/advantages.js',
    about: './src/js/about.js',
    questions: './src/js/questions.js',
    support: './src/js/support.js',
    notFound: './src/js/notFound.js',
    serverError: './src/js/serverError.js',
    policy: './src/js/policy.js',
    instructions: './src/js/instructions.js',
    partners: './src/js/partners.js',
    rates: './src/js/rates.js',
    lkProfile: './src/js/lkProfile.js',
    lkCompany: './src/js/lkCompany.js',
    lkProgram: './src/js/lkProgram.js',
    lk: './src/js/lk.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: './'
  },
  resolve: {
    modules: [
      path.join(__dirname, '/'),
      'node_modules'
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    writeToDisk: true,
    open: true,

  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'resolve-url-loader',
            options: {
              keepQuery: true
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
        test: /\.js$/,
        use: { loader: "babel-loader" },
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: 'img',
              outputPath: 'img',
              useRelativePath: true,
              esModule: false,
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
            }
          },
        ]
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
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
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
      chunks: ['main']
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