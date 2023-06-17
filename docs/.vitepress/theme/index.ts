import Theme from 'vitepress/theme'
import './tailwind.css'
import VPDemo from '@/vitepress/components/vp-demo.vue'
import 'prismjs/themes/prism.css'
import FanDesign from 'fan-design'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(FanDesign)
    app.component('Demo', VPDemo)
  }
}
