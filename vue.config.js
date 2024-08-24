// vue.config.js
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module.rules.delete('images');

    config.module
      .rule('assets')
      .test(/\.(pdf|png|jpeg|jpg|gif|svg|webp)$/i) 
      .type('asset/resource')
      .set('generator', {
        filename: 'assets/[name].[hash:8][ext]' 
      });
  }
});
