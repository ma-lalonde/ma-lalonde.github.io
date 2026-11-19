<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { formatDate, programs, projectTypes, scianUrl, sectors, typeLabels } from '../data/programs'
import type { ProjectType, Text } from '../data/programs'
import { matchPrograms } from '../data/match'
import { regions, territories } from '../data/territories'
import type { Territory } from '../data/territories'

const props = defineProps<{ lang: 'fr' | 'en' }>()

const ui = {
  fr: {
    employees: "Nombre d'employés",
    revenue: "Chiffre d'affaires annuel ($)",
    project: 'Type de projet',
    sector: "Secteur d'activité (SCIAN)",
    region: 'Région',
    territory: 'MRC ou territoire',
    choose: 'Choisir',
    any: 'Je ne sais pas',
    scian: 'Trouver votre code SCIAN',
    reset: 'Effacer',
    privacy: "Le calcul se fait dans votre navigateur : rien de ce que vous entrez n'est envoyé ni conservé.",
    hint: 'Choisissez un type de projet pour voir les programmes qui pourraient le viser. Les autres champs affinent le résultat.',
    found: (n: number) => (n === 1 ? '1 programme pourrait viser votre projet' : `${n} programmes pourraient viser votre projet`),
    none: 'Aucun programme de la liste ne semble viser ce projet avec ces réponses.',
    guarantee: "Aucun n'est garanti : l'organisme décide. Les points à vérifier peuvent changer le résultat.",
    why: 'Pourquoi il pourrait viser votre projet',
    verify: 'À vérifier',
    status: 'Statut',
    ends: 'Prend fin le',
    verified: 'Vérifié le',
    admin: "Page de l'organisme",
    office: 'Bureau de votre MRC (FLI et FLS)',
    ruledOut: (n: number) => `Programmes écartés (${n})`,
    amount: 'Ce que ça paie',
  },
  en: {
    employees: 'Number of employees',
    revenue: 'Annual revenue ($)',
    project: 'Project type',
    sector: 'Industry (NAICS)',
    region: 'Region',
    territory: 'MRC or territory',
    choose: 'Choose',
    any: "I don't know",
    scian: 'Find your NAICS code',
    reset: 'Clear',
    privacy: 'The calculation runs in your browser: nothing you enter is sent or stored.',
    hint: 'Choose a project type to see the programs that might cover it. The other fields refine the result.',
    found: (n: number) => (n === 1 ? '1 program might cover your project' : `${n} programs might cover your project`),
    none: 'No program in the list seems to cover this project with these answers.',
    guarantee: 'None is guaranteed: the administrator decides. The points to check can change the result.',
    why: 'Why it might cover your project',
    verify: 'To check',
    status: 'Status',
    ends: 'Ends on',
    verified: 'Verified on',
    admin: "Administrator's page",
    office: "Your MRC's FLI and FLS office",
    ruledOut: (n: number) => `Programs ruled out (${n})`,
    amount: 'What it pays',
  },
}

const employees = ref<number | ''>('')
const revenue = ref<number | ''>('')
const project = ref<ProjectType | ''>('')
const sector = ref('')
const region = ref('')
const territory = ref('')

watch(region, () => {
  territory.value = ''
})

const s = computed(() => ui[props.lang])
const tx = (v: Text) => v[props.lang]
const terrName = (x: Territory) => (props.lang === 'en' ? x.nameEn ?? x.name : x.name)
const regionTerritories = computed(() => territories.filter((x) => x.region === region.value))
const url = (p: { url: string; urlEn?: string }) => (props.lang === 'en' && p.urlEn ? p.urlEn : p.url)

const result = computed(() =>
  matchPrograms(
    {
      employees: employees.value === '' ? null : Number(employees.value),
      revenue: revenue.value === '' ? null : Number(revenue.value),
      project: project.value,
      sector: sector.value,
      territory: territory.value,
    },
    programs,
    territories,
  ),
)

const office = (id: string) => {
  const p = programs.find((x) => x.id === id)
  return p?.officeByTerritory ? territories.find((x) => x.id === territory.value)?.fli : undefined
}

function reset() {
  employees.value = ''
  revenue.value = ''
  project.value = ''
  sector.value = ''
  region.value = ''
  territory.value = ''
}
</script>

<template>
  <section class="gs">
    <form class="gs-form" @submit.prevent>
      <div class="gs-field">
        <label for="gs-employees">{{ s.employees }}</label>
        <input id="gs-employees" v-model.number="employees" type="number" min="0" inputmode="numeric" />
      </div>
      <div class="gs-field">
        <label for="gs-revenue">{{ s.revenue }}</label>
        <input id="gs-revenue" v-model.number="revenue" type="number" min="0" step="10000" inputmode="numeric" />
      </div>
      <div class="gs-field">
        <label for="gs-project">{{ s.project }}</label>
        <select id="gs-project" v-model="project">
          <option value="">{{ s.choose }}</option>
          <option v-for="x in projectTypes" :key="x.id" :value="x.id">{{ tx(x.name) }}</option>
        </select>
      </div>
      <div class="gs-field">
        <label for="gs-sector">{{ s.sector }}</label>
        <select id="gs-sector" v-model="sector">
          <option value="">{{ s.any }}</option>
          <option v-for="x in sectors" :key="x.code" :value="x.code">{{ x.code }} - {{ tx(x.name) }}</option>
        </select>
        <a class="gs-help" :href="tx(scianUrl)" target="_blank" rel="noopener">{{ s.scian }}</a>
      </div>
      <div class="gs-field">
        <label for="gs-region">{{ s.region }}</label>
        <select id="gs-region" v-model="region">
          <option value="">{{ s.any }}</option>
          <option v-for="x in regions" :key="x.id" :value="x.id">{{ x.name }}</option>
        </select>
      </div>
      <div class="gs-field">
        <label for="gs-territory">{{ s.territory }}</label>
        <select id="gs-territory" v-model="territory" :disabled="!region">
          <option value="">{{ s.any }}</option>
          <option v-for="x in regionTerritories" :key="x.id" :value="x.id">{{ terrName(x) }}</option>
        </select>
      </div>
      <div class="gs-actions">
        <button type="button" class="gs-reset" @click="reset">{{ s.reset }}</button>
        <p class="gs-privacy">{{ s.privacy }}</p>
      </div>
    </form>

    <p v-if="!project" class="gs-hint">{{ s.hint }}</p>

    <div v-else class="gs-results" aria-live="polite">
      <h3 class="gs-count">{{ result.matches.length ? s.found(result.matches.length) : s.none }}</h3>
      <p v-if="result.matches.length" class="gs-guarantee">{{ s.guarantee }}</p>

      <article v-for="m in result.matches" :key="m.program.id" class="gs-card">
        <header class="gs-card-head">
          <h4>
            <a :href="url(m.program)" target="_blank" rel="noopener">{{ tx(m.program.name) }}</a>
          </h4>
          <span class="gs-badge" :data-type="m.program.type">{{ tx(typeLabels[m.program.type]) }}</span>
        </header>
        <p class="gs-admin">{{ tx(m.program.administrator) }}</p>
        <p><strong>{{ s.amount }} :</strong> {{ tx(m.program.amount) }}</p>
        <p>{{ tx(m.program.covers) }}</p>
        <h5>{{ s.why }}</h5>
        <ul>
          <li v-for="(r, k) in m.reasons" :key="k">{{ tx(r) }}</li>
        </ul>
        <h5>{{ s.verify }}</h5>
        <ul>
          <li v-for="(c, k) in m.checks" :key="'c' + k">{{ tx(c) }}</li>
          <li v-for="(c, k) in m.program.verify" :key="'v' + k">{{ tx(c) }}</li>
        </ul>
        <p class="gs-meta">
          {{ s.status }} : {{ tx(m.program.status) }}<template v-if="m.program.end">. {{ s.ends }} {{ formatDate(m.program.end, lang) }}</template>.
          {{ s.verified }} {{ formatDate(m.program.verified, lang) }}.
        </p>
        <p class="gs-links">
          <a :href="url(m.program)" target="_blank" rel="noopener">{{ s.admin }}</a>
          <a v-if="office(m.program.id)" :href="office(m.program.id)" target="_blank" rel="noopener">{{ s.office }}</a>
        </p>
      </article>

      <details v-if="result.excluded.length" class="gs-out">
        <summary>{{ s.ruledOut(result.excluded.length) }}</summary>
        <ul>
          <li v-for="e in result.excluded" :key="e.program.id">
            <strong>{{ tx(e.program.name) }}</strong> ({{ tx(typeLabels[e.program.type]).toLowerCase() }}) : {{ tx(e.reason) }}
          </li>
        </ul>
      </details>
    </div>
  </section>
</template>

<style scoped>
.gs {
  margin: 24px 0;
}
.gs-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}
.gs-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.gs-field label {
  font-size: 14px;
  font-weight: 600;
}
.gs-field input,
.gs-field select {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
}
.gs-field input:focus,
.gs-field select:focus {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 1px;
}
.gs-field select:disabled {
  opacity: 0.6;
}
.gs-help {
  font-size: 13px;
}
.gs-actions {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
.gs-reset {
  padding: 6px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
  cursor: pointer;
}
.gs-reset:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.gs-privacy,
.gs-guarantee,
.gs-hint,
.gs-meta {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
.gs-hint {
  margin-top: 16px;
}
.gs-count {
  margin: 24px 0 4px;
  border: 0;
  padding: 0;
  font-size: 20px;
}
.gs-card {
  margin-top: 16px;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
}
.gs-card p {
  margin: 8px 0;
}
.gs-card-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}
.gs-card h4 {
  margin: 0;
  font-size: 17px;
}
.gs-card h5 {
  margin: 12px 0 4px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
.gs-card ul {
  margin: 0;
  padding-left: 20px;
}
.gs-card li {
  margin: 2px 0;
  font-size: 14px;
}
.gs-badge {
  padding: 2px 10px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}
.gs-badge[data-type='loan'] {
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
}
.gs-badge[data-type='taxCredit'] {
  background: var(--vp-c-tip-soft);
  color: var(--vp-c-tip-1);
}
.gs-admin {
  font-size: 14px;
  color: var(--vp-c-text-2);
}
.gs-links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 14px;
}
.gs-out {
  margin-top: 24px;
  padding: 12px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
.gs-out summary {
  cursor: pointer;
  font-weight: 600;
}
.gs-out ul {
  margin: 12px 0 0;
  padding-left: 20px;
}
.gs-out li {
  margin: 6px 0;
  font-size: 14px;
}
</style>
