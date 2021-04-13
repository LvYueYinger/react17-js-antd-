/*
 * @Author: your name
 * @Date: 2021-04-13 14:26:55
 * @LastEditTime: 2021-04-13 14:27:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /new-react-learn/.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
