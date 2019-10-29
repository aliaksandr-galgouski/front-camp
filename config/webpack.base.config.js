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
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: {
                        node: 6.5
                      }
                    }
                  ]
                ]
              }
            }
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
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new webpack.DefinePlugin({
          "process.env.MODE": JSON.stringify(env.MODE),          
        }),
        new CopyWebpackPlugin([{ from: "src/assets" }])
      ]
    }
  ]);
};
