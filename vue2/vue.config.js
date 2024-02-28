const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container
const path = require('path')

module.exports = defineConfig({
  publicPath: 'http://localhost:8000',
  transpileDependencies: true,
  devServer: {
    port: 8000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        // 应用名，全局唯一，不可冲突。
        name: 'vue2',
        // 暴露的文件名称
        filename: 'vue2_mf.js',
        // 远程应用暴露出的模块名。
        exposes: {
          './HelloWorld': path.resolve(
            __dirname,
            './src/components/HelloWorld.vue'
          )
        }
        // library: { type: "window", name: "vue2" }
        // 依赖包 依赖的包 webpack在加载的时候会先判断本地应用是否存在对应的包，如果不存在，则加载远程应用的依赖包。
        // shared: {
        //   react: {
        //     singleton: true
        //   },
        //   moment: {
        //     singleton: true
        //   }
        // }
      })
    ],
    optimization: {
      splitChunks: false
    }
  }
})
