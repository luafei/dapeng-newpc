const port = process.env.port || process.env.npm_config_port || 8080 // dev port
module.exports = {
    publicPath: './',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        host: "0.0.0.0",
        port: port,
        proxy: {
            '/gov': {
                target: process.env.VUE_APP_BASE_API,
                ws: false,
                pathRewrite: {
                    '^/gov': '/gov'
                }
            },
            '/mobile': {
                target: process.env.VUE_APP_BASE_API,
                ws: false,
                pathRewrite: {
                    '^/mobile': '/mobile'
                }
            },
            '/permit': {
                target: process.env.VUE_APP_BASE_API,
                ws: false,
                pathRewrite: {
                    '^/permit': '/permit'
                }
            },
            '/traffic': {
                target: process.env.VUE_APP_BASE_API,
                ws: false,
                pathRewrite: {
                    '^/traffic': '/traffic'
                }
            }
        }
    },
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              require('postcss-pxtorem')({
                rootValue : 32, // 换算的基数
                selectorBlackList  : [], // 忽略转换正则匹配项 列入一些ui库, ['.el'] 就是忽略elementUI库
                propList   : ['*'],
              }),
            ]
          }
        }
    }
}