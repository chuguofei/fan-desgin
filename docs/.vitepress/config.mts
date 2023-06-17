import { defineConfig } from 'vitepress'
import { nav, sidebar } from './configs'
import { mdPlugin } from '../plugins/mdPlugin'

export default defineConfig({
    title: 'fan-design',
    description: 'this is fan-design doc',
    themeConfig: {
        nav,
        sidebar
    },
    markdown: {
        config: md => mdPlugin(md)
    }
})
