const path = require('path');
const px2rem = require('postcss-px2rem');




module.exports = {
    //   runtimeCompiler: true, //这个是本地修改后提交的内容  
    lintOnSave: false, // 关闭EsLint的规则   这是
    css: { // 为了检测修改新建的内容 添加postcss配置
        loaderOptions: {
            postcss: {
                plugins: [
                    // 配置postcss-px2rem
                    px2rem({
                        remUnit: 37.5   // 设计稿等分后的rem值   375/10
                    })
                ]
            }
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],//可以省略后缀名
            alias: {
                // '@':path.resolve(__dirname,'src'),
                // '@components':path.resolve(_dirname,'src/components'),
            }
        }
    },
    devServer: {
        host: "localhost", 
        port: '8081', //我的端口,端口生效了
        https: false,
        proxy: {
            '/api': { // 匹配所有以 '/api'开头的请求路径
                target: 'http://localhost:4000', // 代理目标的基础路径
                changeOrigin: true, // 支持跨域
                pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
                    '^/api': ''
                }
            }
           

        }
    }

}
