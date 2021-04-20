const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: ["babel-loader"],
      },
    ],
  },
  // resolve: {
  //   extensions: ["*", ".js", ".jsx"],
  // },
};
