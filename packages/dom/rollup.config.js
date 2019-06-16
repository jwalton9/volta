export default {
  input: "src/index.js",
  output: [
    {
      file: "lib/volta-dom.js",
      format: "cjs"
    },
    {
      file: "lib/volta-dom.mjs",
      format: "esm"
    },
    {
      file: "lib/volta-dom.umd.js",
      format: "umd",
      name: "VoltaDOM"
    }
  ]
};
