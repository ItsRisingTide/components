const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const Paths = {
  SRC: path.join(__dirname, './src'),
  DIST: path.join(__dirname, './dist'),
  BUILD: path.join(__dirname, './build'),
  PUBLIC: path.join(__dirname, './public'),
  NODE_MODULES: path.join(__dirname, './node_modules'),
};

const config = {
  entry: {
    main: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: Paths.BUILD,
    filename: '[name].[contenthash].js',
    compareBeforeEmit: true,
  },
  devServer: {
    contentBase: Paths.DIST,
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
    // https: true,
  },
  optimization: {},
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    modules: [Paths.SRC, Paths.NODE_MODULES],
    extensions: ['.ts', '.tsx', '.js', '.css'],
    alias: {
      stream: false,
      buffer: false,
      querystring: false,
      timers: false,
      util: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Прод. каталог',
      template: `${Paths.PUBLIC}/index.html`,
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
      filename: 'index.html',
      hash: true,
    }),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: './.env',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: Paths.PUBLIC,
          globOptions: {
            ignore: '*/index.html',
          },
          to: '',
        },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.PROJECT_VERSION': JSON.stringify(require('./package.json').version),
      'process.env.PROJECT_BRANCH': JSON.stringify(require('./package.json').branch),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  cache: {
    type: 'filesystem',
    store: 'pack',
  },
  parallelism: 100,
};

module.exports = (env, argv) => {
  config.mode = argv.mode || 'development';

  const isDev = config.mode === 'development';
  const isServe = (argv.env && argv.env.WEBPACK_SERVE) || false;

  if (isDev) {
    config.devtool = 'source-map';
  }

  if (isServe) {
    config.output.path = Paths.DIST;
  }

  if (!isDev) {
    config.optimization.minimize = true;
  }

  return config;
};
