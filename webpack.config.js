const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/env", "@babel/react"]
        }
      },
      {
        test: /\.s?css/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    publicPath: "/",
    port: 8080,
    proxy: {
      "/api/*": {
        target: "http://localhost:3000",
        secure: false
      },
      "/users/*": {
        target: "http://localhost:3000",
        secure: false
      },
      "/msg/*": {
        target: "http://localhost:3000",
        secure: false
      }
    },

    historyApiFallback: true
  }
};
