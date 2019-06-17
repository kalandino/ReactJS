const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    app: "./index.jsx",
  }, // string | object | array

  context: `${__dirname}/static_src`, // string (absolute path!)

  output: {
    path: `${__dirname}/static/build`,
    filename: "app.js", // string
    publicPath: "/static/build", // string
  },

  optimization: {
    minimize: NODE_ENV !== 'development',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: `${__dirname}/static_src`,
        loader: "babel-loader?presets[]=react&presets[]=es2015&presets[]=stage-1",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
        loader: 'url-loader?limit=4096&name=[path][name].[ext]',
      },
    ],
  },

  resolve: {
    modules: [
      `${__dirname}/static_src`,
      "node_modules",
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },

  watch: NODE_ENV === 'development',
  watchOptions: {
      aggregateTimeout: 100,
  },

  devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,
};