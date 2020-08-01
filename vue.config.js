const { configureServer } = require("./src/server/dist");

module.exports = {
  devServer: {
    before: configureServer
  }
};
