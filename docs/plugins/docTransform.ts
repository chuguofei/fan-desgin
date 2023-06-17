import path from 'path'
import consola from 'consola'
import chalk from 'chalk'
import type { Plugin } from 'vite'

export function docTransform(): Plugin {
  return {
    name: 'FanDocTransform',
    // 在plugin-vue 之前解析
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.md')) return
      const demoFileName = path.basename(id, '.md')

      const globalDemos = `
      \n<script setup>
            const demos = import.meta.globEager('../examples/${demoFileName}/*.vue')
        </script>
      `

      code = `${code}\n${globalDemos}`

      return code
    }
  }
}
