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
};
