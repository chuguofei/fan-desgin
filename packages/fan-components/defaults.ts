import { objectEntries } from './_utils/compatible'
import * as components from './components'
import type { App } from 'vue'

const install = (app: App) => {
  objectEntries(components).forEach(([key, value]): void => {
    app.component(key, value)
  })

  return app
}

export default { install }
