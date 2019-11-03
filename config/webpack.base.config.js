const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const SRC_DIR = path.resolve(__dirname, "../src");

module.exports = env => {
  const { MODE } = env;
  return merge([
    {
      mode: MODE,
      entry: ["@babel/polyfill", SRC_DIR],
      devtool: "inline-module-source-map",
      module: {
        rules: [
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: "babel-loader"
          },
          {
            test: /\.css$/i,
            use: [
              MODE === "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
              "css-loader"
            ]
          }
        ]
      },
      plugins: [
        new CopyWebpackPlugin([{ from: "src/assets" }]),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new webpack.DefinePlugin({
          "process.env.MODE": JSON.stringify(env.MODE)
        })
      ]
    }
  ]);
};
