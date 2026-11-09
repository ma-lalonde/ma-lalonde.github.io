import { defineConfig } from 'vitepress'
import { frToEn, enToFr } from './theme/locale-map.js'

const SITE_URL = 'https://ma-lalonde.dev'
const OG_IMAGE = `${SITE_URL}/images/profile.jpg`

const FR_DESCRIPTION =
  "Modernisation, automatisation et optimisation pour PME : du temps et de l'argent sauvés, plus de productivité et de rendement, des données sécurisées et souveraines."
const EN_DESCRIPTION =
  'Modernization, automation and optimization for small business: time and money saved, higher productivity and yield, data kept secure and under your control.'

export default defineConfig({
  title: 'Marc-Antoine Lalonde',
  description: FR_DESCRIPTION,
  base: '/',

  sitemap: {
    hostname: SITE_URL
  },

  locales: {
    root: {
      label: 'Français',
      lang: 'fr-CA',
      themeConfig: {
        siteTitle: false,
        nav: [
          { text: 'Accueil', link: '/' },
          { text: 'Projets', link: '/projets/' },
          { text: 'Subventions', link: '/subventions' },
          { text: 'Contact', link: '/contact' }
        ],
        footer: {
          message: '<a href="/confidentialite">Politique de confidentialité</a>'
        },
        sidebar: {
          '/projets/': [
            {
              text: 'Projets',
              items: [
                { text: 'Catena (depuis 2026)', link: '/projets/catena' },
                { text: 'Chocolat Infini (2024-2026)', link: '/projets/chocolate' },
                { text: 'Connaxio (2021-2024)', link: '/projets/connaxio' },
                { text: 'VAMUdeS (2016-2018)', link: '/projets/drones' }
              ]
            },
            {
              text: 'Clients',
              items: [
                { text: 'Human Garage', link: '/projets/human-garage' },
                { text: 'West Coast Fungi', link: '/projets/west-coast-fungi' },
                { text: 'Revolutionnez.ca', link: '/projets/revolutionnez' },
                { text: 'SBQuantum et QMSat (2018-2020)', link: '/projets/sbquantum-qmsat' }
              ]
            }
          ]
        },
        outline: { label: 'Sur cette page' },
        docFooter: { prev: 'Précédent', next: 'Suivant' },
        returnToTopLabel: 'Retour en haut',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Apparence',
        lightModeSwitchTitle: 'Passer en mode clair',
        darkModeSwitchTitle: 'Passer en mode sombre',
        langMenuLabel: 'Changer de langue'
      },
      head: [
        ['meta', { name: 'description', content: FR_DESCRIPTION }],
        ['meta', { property: 'og:description', content: FR_DESCRIPTION }],
        ['meta', { property: 'og:locale', content: 'fr_CA' }]
      ]
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        siteTitle: false,
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Projects', link: '/en/projects/' },
          { text: 'Contact', link: '/en/contact' }
        ],
        footer: {
          message: '<a href="/en/privacy">Privacy policy</a>'
        },
        sidebar: {
          '/en/projects/': [
            {
              text: 'Projects',
              items: [
                { text: 'Catena (since 2026)', link: '/en/projects/catena' },
                { text: 'Chocolat Infini (2024-2026)', link: '/en/projects/chocolate' },
                { text: 'Connaxio (2021-2024)', link: '/en/projects/connaxio' },
                { text: 'VAMUdeS (2016-2018)', link: '/en/projects/drones' }
              ]
            },
            {
              text: 'Clients',
              items: [
                { text: 'Human Garage', link: '/en/projects/human-garage' },
                { text: 'West Coast Fungi', link: '/en/projects/west-coast-fungi' },
                { text: 'Revolutionnez.ca', link: '/en/projects/revolutionnez' },
                { text: 'SBQuantum and QMSat (2018-2020)', link: '/en/projects/sbquantum-qmsat' }
              ]
            }
          ]
        }
      },
      head: [
        ['meta', { name: 'description', content: EN_DESCRIPTION }],
        ['meta', { property: 'og:description', content: EN_DESCRIPTION }],
        ['meta', { property: 'og:locale', content: 'en_US' }]
      ]
    }
  },

  head: [
    [
      'script',
      {
        src: 'https://challenges.cloudflare.com/turnstile/v0/api.js',
        async: '',
        defer: ''
      }
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Marc-Antoine Lalonde' }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:image:alt', content: 'Marc-Antoine Lalonde' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }]
  ],

  transformHead({ pageData }) {
    const rel = pageData.relativePath
      .replace(/\.md$/, '')
      .replace(/(^|\/)index$/, '$1')
    const path = '/' + rel
    const clean = path.endsWith('/') ? path : path

    const isEn = clean === '/en/' || clean.startsWith('/en/')
    const enPath = isEn ? clean : frToEn[clean]
    const frPath = isEn ? enToFr[clean] : clean

    const tags: [string, Record<string, string>][] = []
    const title = pageData.title || 'Marc-Antoine Lalonde'

    tags.push(['meta', { property: 'og:title', content: title }])
    tags.push([
      'link',
      { rel: 'canonical', href: SITE_URL + clean }
    ])
    if (frPath) {
      tags.push(['link', { rel: 'alternate', hreflang: 'fr-CA', href: SITE_URL + frPath }])
      tags.push(['link', { rel: 'alternate', hreflang: 'x-default', href: SITE_URL + frPath }])
    }
    if (enPath) {
      tags.push(['link', { rel: 'alternate', hreflang: 'en', href: SITE_URL + enPath }])
    }

    return tags
  }
})
