/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const cdn = {
  //开发环境
  dev: {
    css: [
    ],
    js: []
  },
  //生产环境
  build: {
    css: [
      'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
    ],
    js: [
      "https://cdn.jsdelivr.net/npm/vue@2.6.11",
      "https://unpkg.com/element-ui@2.13.2/lib/index.js",
      "https://unpkg.com/axios@0.19.2/dist/axios.min.js",
      "https://unpkg.com/vuex@3.4.0",
      "https://unpkg.com/vue-router@3.2.0/dist/vue-router.js"
    ]
  }
}
module.exports = {
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',  //129.204.224.217:80
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/api'
    //     }
    //   }
    // }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      if(process.env.NODE_ENV==='production'){
        args[0].cdn = cdn.build
      }else if(process.env.NODE_ENV==='development'){
        args[0].cdn = cdn.dev
      }
      return args
    })
    config.plugins.delete('prefetch')
    // config.plugin('CompressionPlugin').use(CompressionPlugin)
  },
  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production'){
      // config.plugin(CompressionPlugin).use(
      //   new CompressionPlugin({
      //     test: /\.js$ | \.html$ | \.css/,
      //     threshold: 10240,
      //     deleteOriginalAssets: false
      //   })
      // )
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'element-ui': 'ELEMENT',
        'axios': 'axios'
      }
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$|\.ttf/,
            // test: /\.js/,
            threshold: 10240,
            deleteOriginalAssets: false
          }),
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_debugger: true,
                drop_console: true,
                pure_funcs: ['console.log']
              },
              sourceMap: false,
              parallel: true
            }
          })
        ],
        performance: {
          // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
          hints: "warning",
          // 开发环境设置较大防止警告
          // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
          maxEntrypointSize: 5000000, 
          // 最大单个资源体积，默认250000 (bytes)
          maxAssetSize: 3000000
        }
      }
    }
  }
}