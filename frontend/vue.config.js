const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: true, // дает использовать https, не пугайтесь, если браузер будет ругаться, сертификата нет
    http2: true
  }
}