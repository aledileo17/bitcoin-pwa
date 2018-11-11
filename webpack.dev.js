const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
require("@babel/polyfill");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true,
    host: "0.0.0.0"
  }
});
