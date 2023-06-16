import { defineConfig } from "vitepress";
import { nav, sidebar } from "./configs";
import { mdPlugin } from "../plugins/mdPlugin";

export default defineConfig({
  title: "fan-desgin",
  description: "this is fan-desgin doc",
  themeConfig: {
    nav,
    sidebar,
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
});
