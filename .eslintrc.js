// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  "globals": {
    "Framework7Theme": false,
    "Framework7": false,
    "Framework7ThemeColors": false,
    "f7app": false,
    "qq": false,
    "wx": false
  },
  // add your custom rules here
  rules: {
    // allow async-await
    "eol-last": 0,
    'eqeqeq': 0,
    'spaced-comment': 0,
    'keyword-spacing': 0,
    'space-before-function-paren': 0,
    'semi': ['off', 'always'],
    'comma-dangle': 0,
    "one-var": ["error", { "initialized": "consecutive" }],
    "indent": [2, 2],
    "quotes": [2, "single"],
    "linebreak-style": [2, "unix"],
    "no-console": [1],
    "no-unused-vars": [1],
    "space-unary-ops": [1, { "words": true, "nonwords": false }],
    "brace-style": [2, "1tbs", { "allowSingleLine": false }],
    "comma-spacing": [2, { "before": false, "after": true }],   // 逗号后有空格，前没有空格
    "comma-style": [2, "last"],  // 逗号跟在结尾
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "lines-around-comment": [
      2, {
        "beforeBlockComment": true,
        "beforeLineComment": false,
        "afterBlockComment": false,
        "afterLineComment": false,
        "allowBlockStart": true,
        "allowObjectStart": true,
        "allowArrayStart": true
      }],
    "max-depth": [2, 4], // 代码最多允许4层嵌套
   // "max-len": [1, 120, 2],
    "max-nested-callbacks": [2, 3],
    "max-params": [2, 5],
   // "max-statements": [1, 50],  // 单个函数最多30条语句
    "no-array-constructor": [2],
    "no-lonely-if": 2,
    "no-multiple-empty-lines": [2, { "max": 3, "maxEOF": 1 }],
    "no-nested-ternary": 2,  // 不使用嵌套的三元表达式
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": [2, "always", {
      "objectsInObjects": false,
      "arraysInObjects": false
    }],
    "arrow-spacing": 2,
    "block-scoped-var": 2,
    "no-dupe-class-members": 2,
    //"no-var": 1,
    "object-shorthand": [2, "always"],
    "array-bracket-spacing": [2, "never"],
    "operator-linebreak": [2, "after"],
    "semi-spacing": [2, { "before": false, "after": true }],
    "keyword-spacing": ["error"],
   // "space-before-blocks": 2,
    "block-spacing": [2, "always"],
    "space-in-parens": [2, "never"],
    "spaced-comment": [1, "always", { "exceptions": ["-", "*", "+"] }],
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
