import type { App, Component } from 'vue'

export type Install<T> = T & {
  install(app: App): void
}

export const withInstall = <T extends Component>(main: T): Install<T> => {
  ;(main as Record<string, unknown>).install = (app: App): void => {
    const { name } = main
    name && app.component(name, main)
  }
  return main as Install<T>
}
