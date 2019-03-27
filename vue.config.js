const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "examples/index.html",
      filename: "index.html"
    }
  },
  configureWebpack: () => {
    return {
      entry: './src/index.js',
      output: {
        filename: 'iui-vue.min.js',
        library: 'iui-vue',
        libraryTarget: 'umd',
        umdNamedDefine: true
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
    config
      // 插件名 
      .plugin('extract-css')
      // 修改规则
      .tap(args => {
        args[0].filename = 'styles/iui-vue.min.css'
        return args
      })
  }
};
