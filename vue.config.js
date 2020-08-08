const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: isProd ? '/special' : './',
    productionSourceMap: !isProd,
    devServer: {
        host: 'xxxxx.qq.com',
        port: 9002,
        proxy: {
            '/apiproxy': {}
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import '@/assets/css/var.scss';
                `,
                sassOptions: {
                    outputStyle: 'expanded'
                }
            }
        }
    },
    transpileDependencies: [
        '@tencent/txv-athena',
        'swiper',
        'dom7'
    ],
    configureWebpack: (config) => {
        if (!isProd) {
            config.devtool = 'cheap-module-eval-source-map'
        }
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10000 }))
    }
}
