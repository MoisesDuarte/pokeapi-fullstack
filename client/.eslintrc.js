module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    "ecmaVersion": "latest",
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {
    "vue/require-default-prop": "off",
  },
};
