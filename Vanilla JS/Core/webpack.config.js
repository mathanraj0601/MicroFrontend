const HtmlWebpackPlugin = require("html-webpack-plugin");
const { template } = require("lodash");
const ModuleFederationPlugin = require("webpack").container;

module.exports = {
  mode: "development", // dev mode
  devServer: {
    port: "8080", // Port for webpack server to lisen
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Mfone",
      filename: "remoteEntry.js",
      exposes: {
        "./mfOneIndex": "./src/index.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "index.html", // To inject webpack created js into index.html
    }),
  ],
};
