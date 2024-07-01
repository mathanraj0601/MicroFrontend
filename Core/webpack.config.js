const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // dev mode
  devServer: {
    port: "8081", // Port for webpack server to lisen
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // To inject webpack created js into index.html
    }),
  ],
};
