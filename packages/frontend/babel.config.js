const config = require("../../babel.config");

module.exports = {
  presets: [
    ["@babel/preset-typescript", { allowNamespaces: true }],
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
  ...config,
};
