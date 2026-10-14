<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    locale?: 'fr' | 'en'
  }>(),
  {
    locale: 'en'
  }
)

// logo: path under docs/public, shown instead of the name when set
const clients: { name: string | { fr: string; en: string }; url?: string; logo?: string }[] = [
  { name: 'Human Garage', url: 'https://www.humangarage.net/' },
  { name: 'Fermes Valhalla', url: 'https://fermesvalhallafarms.com/' },
  { name: 'Révolutionnez.ca' },
  { name: { fr: 'Ferme de champignons à Lions Bay', en: 'Lions Bay mushroom farm' } },
  { name: 'SBQuantum', url: 'https://sbquantum.com/' },
  { name: 'Université de Sherbrooke', url: 'https://www.usherbrooke.ca/' }
]

const entries = computed(() =>
  clients.map((c) => ({
    ...c,
    label: typeof c.name === 'string' ? c.name : c.name[props.locale]
  }))
)
</script>

<template>
  <ul class="client-banner">
    <li v-for="entry in entries" :key="entry.label">
      <component
        :is="entry.url ? 'a' : 'span'"
        :href="entry.url"
        :target="entry.url ? '_blank' : undefined"
        :rel="entry.url ? 'noopener' : undefined"
        class="client-banner__item"
      >
        <img v-if="entry.logo" :src="entry.logo" :alt="entry.label" />
        <template v-else>{{ entry.label }}</template>
      </component>
    </li>
  </ul>
</template>

<style scoped>
.client-banner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem 2.5rem;
  list-style: none;
  padding: 1.5rem 0;
  margin: 0;
}

.client-banner li {
  margin: 0;
}

.client-banner__item {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.25s;
}

a.client-banner__item:hover {
  color: var(--vp-c-brand-1);
}

.client-banner__item img {
  display: block;
  max-height: 48px;
  max-width: 160px;
}
</style>
