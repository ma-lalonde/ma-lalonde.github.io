<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import { frToEn, enToFr } from './locale-map'

const { Layout } = DefaultTheme
const route = useRoute()

const target = computed(() => {
  const p = route.path.replace(/\.html$/, '').replace(/#.*$/, '')
  if (p === '/en/' || p.startsWith('/en/')) {
    return { href: enToFr[p] || '/', label: 'FR', aria: 'Passer au français' }
  }
  return { href: frToEn[p] || '/en/', label: 'EN', aria: 'Switch to English' }
})
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <a
        class="lang-toggle"
        :href="target.href"
        :aria-label="target.aria"
      >{{ target.label }}</a>
    </template>
    <template #nav-screen-content-after>
      <a
        class="lang-toggle lang-toggle--screen"
        :href="target.href"
        :aria-label="target.aria"
      >{{ target.label }}</a>
    </template>
  </Layout>
</template>

<style scoped>
.lang-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  padding: 0 12px;
  height: 28px;
  margin-left: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--vp-c-text-1);
  transition: border-color 0.25s, color 0.25s;
}

.lang-toggle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.lang-toggle--screen {
  margin-top: 16px;
  margin-left: 0;
  align-self: flex-start;
}
</style>
