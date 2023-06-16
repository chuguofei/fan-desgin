import { defineConfig } from "vite";
import { resolve } from "path";
import { docTransform } from "./plugins/docTransform";

export default defineConfig({
  server: {
    port: 8000,
  },
  resolve: {
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
  },
  plugins:[
    docTransform()
  ]
});
