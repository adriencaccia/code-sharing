const defaultPresets = [
  ["@babel/preset-typescript", { allowNamespaces: true }],
];

const defaultPlugins = ["@babel/plugin-transform-runtime"];

const defaultIgnores = ["node_modules", "dist"];

const presetsForESM = [
  [
    "@babel/preset-env",
    {
      modules: false,
    },
  ],
  ...defaultPresets,
];
const presetsForCJS = [
  [
    "@babel/preset-env",
    {
      modules: "cjs",
    },
  ],
  ...defaultPresets,
];

module.exports = {
  env: {
    cjs: {
      ignore: defaultIgnores,
      presets: presetsForCJS,
      plugins: defaultPlugins,
    },
    esm: {
      ignore: defaultIgnores,
      presets: presetsForESM,
      plugins: defaultPlugins,
    },
  },
};
