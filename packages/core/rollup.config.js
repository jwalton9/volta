export default {
  input: "src/index.js",
  output: [
    {
      file: "lib/volta-core.js",
      format: "cjs"
    },
    {
      file: "lib/volta-core.mjs",
      format: "esm"
    },
    {
      file: "lib/volta-core.umd.js",
      format: "umd",
      name: "Volta"
    }
  ]
};
