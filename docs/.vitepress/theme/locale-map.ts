export const frToEn: Record<string, string> = {
  '/': '/en/',
  '/contact': '/en/contact',
  '/confidentialite': '/en/privacy',
  '/projets/': '/en/projects/',
  '/projets/catena': '/en/projects/catena',
  '/projets/chocolate': '/en/projects/chocolate',
  '/projets/connaxio': '/en/projects/connaxio',
  '/projets/drones': '/en/projects/drones',
  '/projets/sbquantum-qmsat': '/en/projects/sbquantum-qmsat',
  '/projets/human-garage': '/en/projects/human-garage',
  '/projets/west-coast-fungi': '/en/projects/west-coast-fungi',
  '/projets/revolutionnez': '/en/projects/revolutionnez'
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
