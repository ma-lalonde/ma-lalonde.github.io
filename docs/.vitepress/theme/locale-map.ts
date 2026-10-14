export const frToEn: Record<string, string> = {
  '/': '/en/',
  '/projets/': '/en/projects/',
  '/contact': '/en/contact'
}

export const enToFr: Record<string, string> = Object.fromEntries(
  Object.entries(frToEn).map(([fr, en]) => [en, fr])
)

const projectSlugs = ['catena', 'chocolate', 'connaxio', 'drones', 'quantum-magnetometer']

// Inbound URLs with no page of their own, sent to the home page or to the project's section
const legacyRedirects: Record<string, string> = {
  '/collaborer': '/',
  '/methode': '/',
  '/work-with-me': '/',
  '/method': '/',
  '/en/work-with-me': '/en/',
  '/en/method': '/en/',
  '/en/collaborer': '/en/',
  '/en/methode': '/en/'
}
for (const slug of projectSlugs) {
  legacyRedirects[`/projets/${slug}`] = `/projets/#${slug}`
  legacyRedirects[`/projects/${slug}`] = `/projets/#${slug}`
  legacyRedirects[`/en/projects/${slug}`] = `/en/projects/#${slug}`
  legacyRedirects[`/en/projets/${slug}`] = `/en/projects/#${slug}`
}

export const localeAliases: Record<string, string> = (() => {
  const aliases: Record<string, string> = { ...legacyRedirects }
  for (const [fr, en] of Object.entries(frToEn)) {
    if (fr === '/' || en === '/en/') continue
    const enSlug = en.replace(/^\/en/, '')
    if (enSlug === fr) continue
    aliases[`/en${fr}`] = en
    aliases[enSlug] = fr
  }
  return aliases
})()
