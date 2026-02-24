<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(
  defineProps<{
    locale?: 'fr' | 'en'
    calLink?: string
    origin?: string
  }>(),
  {
    locale: 'en',
    calLink: 'malalonde',
    origin: 'https://cal.ma-lalonde.dev'
  }
)

let themeObserver: MutationObserver | null = null

const currentTheme = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'

function ensureCalLoaded(origin: string) {
  const w = window as any
  if (w.Cal) return
  ;(function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) {
      a.q.push(ar)
    }
    const d = C.document
    C.Cal =
      C.Cal ||
      function () {
        const cal = C.Cal
        const ar = arguments
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api: any = function () {
            p(api, arguments)
          }
          const namespace = ar[1]
          api.q = api.q || []
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], ar)
            p(cal, ['initNamespace', namespace])
          } else {
            p(cal, ar)
          }
          return
        }
        p(cal, ar)
      }
  })(w, `${origin}/embed/embed.js`, 'init')
  w.Cal('init', { origin })
}

onMounted(() => {
  if (typeof window === 'undefined') return
  ensureCalLoaded(props.origin)

  const Cal = (window as any).Cal
  Cal('inline', {
    elementOrSelector: '#my-cal-inline',
    calLink: props.calLink,
    layout: 'month_view',
    config: { 'cal.locale': props.locale }
  })
  Cal('ui', {
    theme: currentTheme(),
    hideEventTypeDetails: false,
    layout: 'month_view'
  })

  themeObserver = new MutationObserver(() => {
    Cal('ui', { theme: currentTheme() })
  })
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})

onBeforeUnmount(() => {
  themeObserver?.disconnect()
})
</script>

<template>
  <div id="my-cal-inline" class="cal-inline"></div>
</template>

<style scoped>
.cal-inline {
  min-height: 650px;
  width: 100%;
  margin: 2rem 0 3rem;
}
</style>
