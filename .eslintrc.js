module.exports = {
  root: true,
  parserOptions: {
    // parser: 'babel-eslint',
    sourceType: 'module'
  },
  // extends: [
  //   'plugin:vue/vue3-essential',
  //   // 'plugin:vue/vue3-recommended',
  //   // 'eslint:recommended',
  //   'standard'
  // ],
  extends: [/* 'plugin:vue/recommended', 'eslint:recommended',  */'plugin:vue/vue3-essential',],
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   sourceType: 'module'
  // },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    // 'semi-spacing': [2, { before: false, after: true }],
    // 'block-spacing': [2, 'always'],
    // 'comma-spacing': [2, { before: false, after: true }]
  }
}
