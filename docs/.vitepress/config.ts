import { defineConfig } from 'vitepress'
import { frToEn, enToFr } from './theme/locale-map'

const SITE_URL = 'https://ma-lalonde.dev'
const OG_IMAGE = `${SITE_URL}/images/profile.png`

const FR_DESCRIPTION =
  "Intégrateur de systèmes disponible pour mandats de 1 à 6 mois — automatisation, électronique embarquée et intégration logicielle-matérielle."
const EN_DESCRIPTION =
  'Systems integrator available for 1 to 6 month contracts — automation, embedded electronics, and hardware-software integration.'

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
          { text: 'Collaborer', link: '/collaborer' },
          { text: 'Projets', link: '/projets/' },
          { text: 'Contact', link: '/contact' }
        ],
        sidebar: {
          '/projets/': [
            {
              text: 'Projets',
              items: [
                { text: 'Chocolat Infini', link: '/projets/chocolate' },
                { text: 'Connaxio', link: '/projets/connaxio' },
                { text: 'Magnétomètre quantique', link: '/projets/quantum-magnetometer' },
                { text: 'VAMUdeS', link: '/projets/drones' },
                { text: 'Auto-hébergement', link: '/projets/self-hosting' }
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
          { text: 'Work with me', link: '/en/work-with-me' },
          { text: 'Projects', link: '/en/projects/' },
          { text: 'Contact', link: '/en/contact' }
        ],
        sidebar: {
          '/en/projects/': [
            {
              text: 'Projects',
              items: [
                { text: 'Chocolat Infini', link: '/en/projects/chocolate' },
                { text: 'Connaxio', link: '/en/projects/connaxio' },
                { text: 'Quantum Magnetometer', link: '/en/projects/quantum-magnetometer' },
                { text: 'VAMUdeS', link: '/en/projects/drones' },
                { text: 'Self Hosting', link: '/en/projects/self-hosting' }
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
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      }
    ],
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
