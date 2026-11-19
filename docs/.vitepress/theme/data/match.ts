// Grant selector logic: pure functions over programs.ts and territories.ts, no DOM, so a plain script can test them.
import type { Program, ProjectType, Text } from './programs.ts'
import type { Territory } from './territories.ts'
import { projectTypes } from './programs.ts'

export interface Inputs {
  employees: number | null
  revenue: number | null
  project: ProjectType | ''
  sector: string
  territory: string
}

export interface Match {
  program: Program
  reasons: Text[]
  checks: Text[]
}

export interface Excluded {
  program: Program
  reason: Text
}

const t = (fr: string, en: string): Text => ({ fr, en })

function group(n: number, sep: string): string {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, sep)
}

function money(n: number): Text {
  if (n >= 1000000 && n % 100000 === 0) {
    const m = n / 1000000
    return t(`${String(m).replace('.', ',')} M$`, `$${m}M`)
  }
  return t(`${group(n, ' ')} $`, `$${group(n, ',')}`)
}

function known(n: number | null): n is number {
  return typeof n === 'number' && Number.isFinite(n)
}

function employeesLimit(p: Program): Text {
  const { employeesMin: lo, employeesMax: hi } = p.rules
  if (lo !== undefined && hi !== undefined) return t(`entre ${lo} et ${hi} employés`, `between ${lo} and ${hi} employees`)
  if (hi !== undefined) return t(`${hi} employés ou moins`, `${hi} employees or fewer`)
  return t(`au moins ${lo} employés`, `at least ${lo} employees`)
}

function revenueLimit(p: Program): Text {
  const { revenueMin: lo, revenueMax: hi } = p.rules
  if (lo !== undefined && hi !== undefined) {
    const a = money(lo - (lo % 1000000 === 1 ? 1 : 0))
    const b = money(hi)
    return t(`plus de ${a.fr} et jusqu'à ${b.fr} de chiffre d'affaires`, `over ${a.en} and up to ${b.en} in revenue`)
  }
  if (hi !== undefined) return t(`${money(hi).fr} ou moins de chiffre d'affaires`, `${money(hi).en} or less in revenue`)
  const a = money(lo as number)
  return t(`${a.fr} ou plus de chiffre d'affaires`, `${a.en} or more in revenue`)
}

function rateText(c3i: Territory['c3i']): Text {
  if (c3i === 25) return t('25 % (territoire à faible vitalité économique)', '25% (low economic vitality territory)')
  if (c3i === 15) return t('15 % (municipalités des communautés métropolitaines de Montréal et de Québec)', '15% (municipalities of the Montréal and Québec metropolitan communities)')
  if (c3i === '15/20') {
    return t(
      "15 % dans les municipalités des communautés métropolitaines de Montréal et de Québec, 20 % ailleurs sur votre territoire",
      '15% in the municipalities of the Montréal and Québec metropolitan communities, 20% elsewhere in your territory',
    )
  }
  return t('20 % (autre territoire du Québec)', '20% (other territory in Quebec)')
}

function matchOne(p: Program, i: Inputs, territory: Territory | undefined): Match | Text {
  const r = p.rules
  const reasons: Text[] = []
  const checks: Text[] = []

  if (i.project) {
    if (!r.projects.includes(i.project)) {
      const name = projectTypes.find((x) => x.id === i.project)!.name
      return t(`Ce programme ne vise pas ce type de projet (${name.fr.toLowerCase()}).`, `This program does not cover this project type (${name.en.toLowerCase()}).`)
    }
    const name = projectTypes.find((x) => x.id === i.project)!.name
    reasons.push(t(`Couvre votre type de projet : ${name.fr.toLowerCase()}.`, `Covers your project type: ${name.en.toLowerCase()}.`))
  }

  if (r.employeesMin !== undefined || r.employeesMax !== undefined) {
    const lim = employeesLimit(p)
    if (!known(i.employees)) {
      checks.push(t(`Nombre d'employés à confirmer : le programme vise ${lim.fr}.`, `Number of employees to confirm: the program covers ${lim.en}.`))
    } else if ((r.employeesMax !== undefined && i.employees > r.employeesMax) || (r.employeesMin !== undefined && i.employees < r.employeesMin)) {
      return t(`Le programme vise ${lim.fr}; vous en avez ${i.employees}.`, `The program covers ${lim.en}; you have ${i.employees}.`)
    } else {
      reasons.push(t(`Avec ${i.employees} employés, vous êtes dans la limite (${lim.fr}).`, `With ${i.employees} employees, you are within the limit (${lim.en}).`))
    }
  }

  if (r.revenueMin !== undefined || r.revenueMax !== undefined) {
    const lim = revenueLimit(p)
    if (!known(i.revenue)) {
      checks.push(t(`Chiffre d'affaires à confirmer : le programme vise ${lim.fr}.`, `Revenue to confirm: the program covers ${lim.en}.`))
    } else if ((r.revenueMax !== undefined && i.revenue > r.revenueMax) || (r.revenueMin !== undefined && i.revenue < r.revenueMin)) {
      const v = money(i.revenue)
      return t(`Le programme vise ${lim.fr}; le vôtre est de ${v.fr}.`, `The program covers ${lim.en}; yours is ${v.en}.`)
    } else {
      reasons.push(t(`Votre chiffre d'affaires est dans la plage visée (${lim.fr}).`, `Your revenue is within the range covered (${lim.en}).`))
    }
  }

  const s = r.sectors
  if (s && p.rules.sectorNote) {
    const note = p.rules.sectorNote
    if (!i.sector) {
      checks.push(t(`Secteur à confirmer. ${note.fr}`, `Sector to confirm. ${note.en}`))
    } else if (s.out?.includes(i.sector) || (s.only && !s.only.includes(i.sector))) {
      return t(`Votre secteur n'est pas visé. ${note.fr}`, `Your sector is not covered. ${note.en}`)
    } else if (s.confirm?.includes(i.sector)) {
      checks.push(note)
    } else if (s.only) {
      reasons.push(t('Votre secteur figure parmi les secteurs visés.', 'Your sector is among those covered.'))
    }
  }

  if (r.geo) {
    const geoNote = r.geoNote as Text
    if (!territory) {
      checks.push(t(`Territoire à confirmer. ${geoNote.fr}`, `Territory to confirm. ${geoNote.en}`))
    } else if ((r.geo.in && !r.geo.in.includes(territory.id)) || r.geo.out?.includes(territory.id)) {
      return geoNote
    } else {
      reasons.push(t(`Votre territoire (${territory.name}) est couvert.`, `Your territory (${territory.nameEn ?? territory.name}) is covered.`))
    }
  }

  if (p.rateByTerritory) {
    if (territory) {
      const rate = rateText(territory.c3i)
      reasons.push(t(`Taux du crédit sur votre territoire : ${rate.fr}.`, `Credit rate in your territory: ${rate.en}.`))
    } else {
      checks.push(t('Le taux du crédit (25 %, 20 % ou 15 %) dépend du territoire où le bien est utilisé.', 'The credit rate (25%, 20% or 15%) depends on where the property is used.'))
    }
  }

  return { program: p, reasons, checks }
}

export function matchPrograms(i: Inputs, list: Program[], territories: Territory[]): { matches: Match[]; excluded: Excluded[] } {
  const territory = territories.find((x) => x.id === i.territory)
  const matches: Match[] = []
  const excluded: Excluded[] = []
  for (const p of list) {
    const out = matchOne(p, i, territory)
    if ('program' in out) matches.push(out)
    else excluded.push({ program: p, reason: out })
  }
  return { matches, excluded }
}
