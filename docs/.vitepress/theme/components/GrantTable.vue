<script setup lang="ts">
import { formatDate, programs, typeLabels } from '../data/programs'

const props = defineProps<{ lang: 'fr' | 'en' }>()

const ui = {
  fr: { program: 'Programme', pays: 'Ce que ça paie', verify: 'À vérifier', status: 'Statut', ends: 'Prend fin le', points: 'points' },
  en: { program: 'Program', pays: 'What it pays', verify: 'To check', status: 'Status', ends: 'Ends on', points: 'points' },
}
const s = ui[props.lang]
const url = (p: { url: string; urlEn?: string }) => (props.lang === 'en' && p.urlEn ? p.urlEn : p.url)
</script>

<template>
  <div class="gt-wrap">
    <table class="gt">
      <thead>
        <tr>
          <th>{{ s.program }}</th>
          <th>{{ s.pays }}</th>
          <th>{{ s.verify }}</th>
          <th>{{ s.status }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in programs" :key="p.id">
          <td>
            <a :href="url(p)" target="_blank" rel="noopener">{{ p.name[lang] }}</a>
            <div class="gt-sub">{{ p.administrator[lang] }}</div>
            <span class="gt-badge" :data-type="p.type">{{ typeLabels[p.type][lang] }}</span>
          </td>
          <td>
            {{ p.amount[lang] }}
            <div class="gt-sub">{{ p.covers[lang] }}</div>
          </td>
          <td>
            <details>
              <summary>{{ p.verify.length }} {{ s.points }}</summary>
              <ul>
                <li v-for="(v, k) in p.verify" :key="k">{{ v[lang] }}</li>
              </ul>
            </details>
          </td>
          <td>
            {{ p.status[lang] }}
            <div v-if="p.end" class="gt-sub">{{ s.ends }} {{ formatDate(p.end, lang) }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.gt-wrap {
  margin: 16px 0;
  overflow-x: auto;
}
.gt {
  display: table;
  width: 100%;
  min-width: 720px;
  font-size: 14px;
}
.gt td,
.gt th {
  vertical-align: top;
  text-align: left;
}
.gt-sub {
  margin-top: 4px;
  color: var(--vp-c-text-2);
  font-size: 13px;
}
.gt-badge {
  display: inline-block;
  margin-top: 6px;
  padding: 1px 8px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 600;
}
.gt-badge[data-type='loan'] {
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
}
.gt-badge[data-type='taxCredit'] {
  background: var(--vp-c-tip-soft);
  color: var(--vp-c-tip-1);
}
.gt summary {
  cursor: pointer;
}
.gt ul {
  margin: 8px 0 0;
  padding-left: 18px;
}
.gt li {
  margin: 4px 0;
}
</style>
