module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-import': {},
        'postcss-px2rem-exclude': {
            remUnit: 100,
            exclude: /node_modules/i
        }
    }
}
