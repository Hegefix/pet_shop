module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  plugins: ["react", "prettier"],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": [
      "error", {
        "trailingComma": "none", 
        "singleQuote": false, 
        "semi": false
      }
    ],
    "react/jsx-filename-extension": "off"
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    fetch: false,
    __DEV__: false,
  }
}
