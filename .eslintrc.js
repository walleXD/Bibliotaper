module.exports = {
  /* your base configuration of choice */
  extends: [
    'standard',
    'standard-react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    __static: true
  }
}
