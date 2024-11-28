const TS = require("rollup-plugin-typescript2");

module.exports = {
  input: ["src/index.ts", "src/components/button/index.ts"],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [TS()],
  external: ["react", "@ds.e/react"],
};
