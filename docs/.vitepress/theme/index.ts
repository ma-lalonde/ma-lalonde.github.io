import type { Theme, Router } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BilingualNotFound from './BilingualNotFound.vue'
import Layout from './Layout.vue'
import CalInline from './components/CalInline.vue'
import ContactForm from './components/ContactForm.vue'
import { localeAliases } from './locale-map'
import './style.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout,
  NotFound: BilingualNotFound,
  enhanceApp({ app, router }: { app: any; router: Router }) {
    app.component('CalInline', CalInline)
    app.component('ContactForm', ContactForm)

    if (typeof window === 'undefined') return
    const previousHook = router.onBeforeRouteChange
    router.onBeforeRouteChange = (to: string) => {
      const [pathOnly, hash] = to.split('#')
      const normalized = pathOnly.replace(/\.html$/, '')
      const mapped = localeAliases[normalized]
      if (mapped) {
        const target = hash ? `${mapped}#${hash}` : mapped
        queueMicrotask(() => router.go(target))
        return false
      }
      return previousHook?.(to)
    }
  }
}

export default theme
