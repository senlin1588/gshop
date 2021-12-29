const path = require('path');
const px2rem = require('postcss-px2rem');

module.exports = {
//   runtimeCompiler: true,
   lintOnSave: false, // 关闭EsLint的规则   这是
  css: { // 为了检测修改新建的内容 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          // 配置postcss-px2rem
          px2rem({
            remUnit: 37.5   // 设计稿等分后的rem值   375/10
          })
        ]
      }
    }
  },
configureWebpack:{
    resolve:{
        extensions:['.js','.vue','.json'],//可以省略后缀名
        alias:{
            // '@':path.resolve(__dirname,'src'),
            // '@components':path.resolve(_dirname,'src/components'),
        }
    }
}

}
