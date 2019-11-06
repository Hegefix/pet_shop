module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  plugins: ["react"],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  rules: {
    "react/jsx-filename-extension": "off"
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    fetch: false,
    __DEV__: false,
  }
}
