const path = require("path");

module.exports = {
  mode: "development", // "production",
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9002,
  },
};
