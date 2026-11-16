import type { Theme, Router } from 'vitepress'
import DefaultTheme, { VPButton } from 'vitepress/theme'
import Layout from './Layout.vue'
import ContactForm from './components/ContactForm.vue'
import { localeAliases } from './locale-map'
import './style.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }: { app: any; router: Router }) {
    app.component('VPButton', VPButton)
    app.component('ContactForm', ContactForm)

    if (typeof window === 'undefined') return
    const previousHook = router.onBeforeRouteChange
    router.onBeforeRouteChange = (to: string) => {
      const [pathOnly, hash] = to.split('#')
      const normalized = pathOnly.replace(/\.html$/, '')
      const mapped = localeAliases[normalized]
      if (mapped) {
        const target = hash ? `${mapped}#${hash}` : mapped
        queueMicrotask(() => router.go(target, { replace: true }))
        return false
      }
      return previousHook?.(to)
    }
  }
}

export default theme
