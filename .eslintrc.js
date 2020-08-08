// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        'plugin:vue/essential',
        'standard'
    ],

    // required to lint *.vue files
    plugins: [
        'vue'
    ],

    // add your custom rules here
    rules: {
        'lines-around-comment': ['error', { beforeLineComment: true, allowClassStart: false }],

        // allow async-await
        'generator-star-spacing': 'off',
        'newline-before-return': 'error',
        'padded-blocks': 'off',
        indent: [1, 4],
        'no-tabs': 0,

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
