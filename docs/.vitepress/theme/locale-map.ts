export const frToEn: Record<string, string> = {
  '/': '/en/',
  '/collaborer': '/en/work-with-me',
  '/contact': '/en/contact',
  '/projets/': '/en/projects/',
  '/projets/chocolate': '/en/projects/chocolate',
  '/projets/connaxio': '/en/projects/connaxio',
  '/projets/drones': '/en/projects/drones',
  '/projets/quantum-magnetometer': '/en/projects/quantum-magnetometer',
  '/projets/self-hosting': '/en/projects/self-hosting'
}

export const enToFr: Record<string, string> = Object.fromEntries(
  Object.entries(frToEn).map(([fr, en]) => [en, fr])
)

export const localeAliases: Record<string, string> = (() => {
  const aliases: Record<string, string> = {}
  for (const [fr, en] of Object.entries(frToEn)) {
    if (fr === '/' || en === '/en/') continue
    const enSlug = en.replace(/^\/en/, '')
    if (enSlug === fr) continue
    aliases[`/en${fr}`] = en
    aliases[enSlug] = fr
  }
  return aliases
})()
