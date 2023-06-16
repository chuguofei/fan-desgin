import Theme from "vitepress/theme";
import "./tailwind.css";
import VPDemo from "../vitepress/components/vp-demo.vue";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component("Demo", VPDemo);
  },
};
