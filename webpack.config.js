/** @type {import("webpack").Configuration} */

const path = require("path");
const NodePloyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  plugins: [new NodePloyfillPlugin()],
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "pages"),
    },
    port: 3000,
    compress: true,
    hot: true,
  },
};
