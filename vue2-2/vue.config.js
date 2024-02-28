const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = defineConfig({
  publicPath: 'http://localhost:8001',
  transpileDependencies: true,
  devServer: {
    port: 8001,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        remotes: {
          // {远程app本地别名}: {远程app配置的name}@远程app根地址/{远程app配置的filename}}
          // remote_index.js里包含的组件会用到的所有第三方依赖
          // ，这些依赖可能拆分多个文件，具体看远程容器的webpack配置
          'vue2': 'vue2@http://localhost:8000/vue2_mf.js'
        }
      })
    ]
  }
})
