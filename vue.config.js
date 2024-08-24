// vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // Clear existing rules and use asset modules
    config.module.rules.delete('images');
    config.module
      .rule('assets')
      .test(/\.(pdf|png|jpe?g|gif|svg|webp)$/i)
      .type('asset/resource')
      .use('asset-resource')
        .loader('asset-resource')
        .options({
          name: 'assets/[name].[hash:8].[ext]'
        });
  }
})
