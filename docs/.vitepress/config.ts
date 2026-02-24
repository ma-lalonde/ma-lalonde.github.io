import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Marc-Antoine Lalonde",
  description: "Systems Integration Engineer | Automation & Precision Systems",

  base: "/",  // IMPORTANT

  themeConfig: {
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Contact', link: '/contact' }
    ],
    
    sidebar: {
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'Chocolat Infini', link: '/projects/chocolate' },
            { text: 'Connaxio', link: '/projects/connaxio' },
            { text: 'Quantum Magnetometer', link: '/projects/quantum-magnetometer' },
            { text: 'Drones', link: '/projects/drones' },
            { text: 'Self Hosting', link: '/projects/self-hosting' }
          ]
        }
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
    ]
  ]
  
})
