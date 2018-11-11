const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  //   devtool: "source-map",
  devtool: false,
  optimization: {
    minimizer: [
      //   new UglifyJsPlugin({
      //     cache: true,
      //     parallel: true,
      //     sourceMap: true
      //   }),
      new OptimizeCssAssetsPlugin({})
    ]
  }
});
