const HtmlWebpackPlugin = require("html-webpack-plugin");
const { template } = require("lodash");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development", // dev mode
  devServer: {
    port: "8080", // Port for webpack server to lisen
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "core",
      remotes: {
        mfone: "mfone@http://localhost:8081/remoteEntry.js", // list of file sub application exposed
      },
      shared: { lodash: { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "index.html", // To inject webpack created js into index.html
    }),
  ],
};
