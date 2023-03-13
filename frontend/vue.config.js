const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    server: {
      type: 'spdy', // дает использовать https и http/2, не пугайтесь, если браузер будет ругаться, сертификата нет
      options: {
      }
    }
  }
}