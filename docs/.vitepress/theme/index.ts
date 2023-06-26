import Theme from 'vitepress/theme'
import './tailwind.css'
import { VPDemo } from '../vitepress'
import 'prismjs/themes/prism.css'
import FanDesign from 'fan-design'
import '@fan-design/ui-theme/src/index.scss'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(FanDesign)
    app.component('Demo', VPDemo)
  }
}
