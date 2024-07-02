const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development", // dev mode
  devServer: {
    port: "8081", // Port for webpack server to lisen
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfone",
      filename: "remoteEntry.js", // have details of all file that are exposed
      exposes: {
        "./MfOneIndex": "./src/index.js", // list of file exposed to host
      },
    }),
    new HtmlWebpackPlugin({
      template: "index.html", // To inject webpack created js into index.html
    }),
  ],
};
