module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
            // 支持装饰器
            legacyDecorators: true
        }
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // "no-unsafe-finally": "off",
        // "no-native-reassign": "off",
        // "complexity": ["off", 11],
        // "comma-dangle": "error",
        // "require-yield": "error",
        // "indent": ['error', 4]  // 间距4个暂时隐藏
    }
}
