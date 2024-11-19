const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // Webpacki kohandatud seadistus
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i, // Kõik pildifailid
          type: 'asset/resource', // Automaatselt genereerib URL-id
          generator: {
            filename: 'assets/[name].[hash:8][ext]' // Faili väljundtee
          }
        }
      ]
    }
  }
});

