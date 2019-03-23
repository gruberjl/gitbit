module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    describe: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
    test: 'readonly',
    expect: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': [2, 'windows'],
    'semi': [2, 'never'],
    'comma-dangle': [2, 'never'],
    'object-curly-spacing': [2, 'never'],
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'curly': [2, 'multi'],
    'nonblock-statement-body-position': [2, 'below'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
    'react/prop-types': 0,
    'react/jsx-no-bind': 0,
    'react/destructuring-assignment': 0,
    'object-curly-newline': 0,
    'jsx-a11y/label-has-for':0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-one-expression-per-line':0
  }
}
