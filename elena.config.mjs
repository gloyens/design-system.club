/**
 * @type {import("@elenajs/bundler").ElenaConfig}
 */
import pkg from "./package.json" with { type: "json" };
import json from "@rollup/plugin-json";

export default {
  input: "src",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: false,
    filename: "embed.js"
  },
  bundle: "src/embed/index.js",
  plugins: [json()],
  banner: `/**
 * ${pkg.name} v${pkg.version}
 * (c) 2025-present Ariel Salminen and contributors
 * @license MIT
 */`
};
