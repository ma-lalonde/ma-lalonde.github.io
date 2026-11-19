// Client-facing copy of the grant research in ma-lalonde/grants-references (one folder per program).
// Every fact below comes from that folder's README. At each re-verification, update the folder first, then this file,
// and set `verified` on each program that was re-read. The Subventions pages render the selector and the table from this file.

export interface Text {
  fr: string
  en: string
}

export type ProgramType = 'grant' | 'loan' | 'taxCredit'

export type ProjectType = 'diagnostic' | 'feasibility' | 'implementation' | 'purchase' | 'training' | 'rd' | 'export'

export interface Sector {
  code: string
  name: Text
}

export interface Rules {
  employeesMin?: number
  employeesMax?: number
  revenueMin?: number
  revenueMax?: number
  projects: ProjectType[]
  // Sector codes (SCIAN 2 digits). `only`: any other sector is ruled out. `out`: ruled out.
  // `confirm`: kept, with `sectorNote` as a point to check. Programs without a list accept every sector.
  sectors?: { only?: string[]; out?: string[]; confirm?: string[] }
  sectorNote?: Text
  // Territory ids (see territories.ts). `in`: only these. `out`: all but these.
  geo?: { in?: string[]; out?: string[] }
  geoNote?: Text
}

export interface Program {
  id: string
  name: Text
  type: ProgramType
  administrator: Text
  covers: Text
  amount: Text
  // Conditions the client can still meet before applying: shown, never used to rule a program out
  verify: Text[]
  status: Text
  end: string | null
  verified: string
  url: string
  urlEn?: string
  rules: Rules
  // The program shows the C3i rate of the chosen territory
  rateByTerritory?: boolean
  // The program shows the link to the chosen territory's FLI/FLS office
  officeByTerritory?: boolean
}

export const projectTypes: { id: ProjectType; name: Text }[] = [
  { id: 'diagnostic', name: { fr: 'Diagnostic ou plan numérique', en: 'Digital diagnostic or plan' } },
  { id: 'feasibility', name: { fr: 'Étude de faisabilité', en: 'Feasibility study' } },
  { id: 'implementation', name: { fr: 'Implantation (mise en oeuvre, intégration)', en: 'Implementation (set-up, integration)' } },
  { id: 'purchase', name: { fr: "Achat d'équipement ou de logiciel", en: 'Equipment or software purchase' } },
  { id: 'training', name: { fr: 'Formation', en: 'Training' } },
  { id: 'rd', name: { fr: 'R-D ou nouveau produit', en: 'R&D or new product' } },
  { id: 'export', name: { fr: 'Exportation', en: 'Export' } },
]

export const typeLabels: Record<ProgramType, Text> = {
  grant: { fr: 'Subvention', en: 'Grant' },
  loan: { fr: 'Prêt', en: 'Loan' },
  taxCredit: { fr: "Crédit d'impôt", en: 'Tax credit' },
}

export const sectors: Sector[] = [
  { code: '11', name: { fr: 'Agriculture, foresterie, pêche et chasse', en: 'Agriculture, forestry, fishing and hunting' } },
  { code: '21', name: { fr: 'Extraction minière, exploitation en carrière, pétrole et gaz', en: 'Mining, quarrying, and oil and gas extraction' } },
  { code: '22', name: { fr: 'Services publics', en: 'Utilities' } },
  { code: '23', name: { fr: 'Construction', en: 'Construction' } },
  { code: '31-33', name: { fr: 'Fabrication', en: 'Manufacturing' } },
  { code: '41', name: { fr: 'Commerce de gros', en: 'Wholesale trade' } },
  { code: '44-45', name: { fr: 'Commerce de détail', en: 'Retail trade' } },
  { code: '48-49', name: { fr: 'Transport et entreposage', en: 'Transportation and warehousing' } },
  { code: '51', name: { fr: "Industrie de l'information et industrie culturelle", en: 'Information and cultural industries' } },
  { code: '52', name: { fr: 'Finance et assurances', en: 'Finance and insurance' } },
  { code: '53', name: { fr: 'Services immobiliers et location', en: 'Real estate and rental and leasing' } },
  { code: '54', name: { fr: 'Services professionnels, scientifiques et techniques', en: 'Professional, scientific and technical services' } },
  { code: '55', name: { fr: "Gestion de sociétés et d'entreprises", en: 'Management of companies and enterprises' } },
  { code: '56', name: { fr: 'Services administratifs et de soutien, gestion des déchets', en: 'Administrative and support, waste management' } },
  { code: '61', name: { fr: "Services d'enseignement", en: 'Educational services' } },
  { code: '62', name: { fr: 'Soins de santé et assistance sociale', en: 'Health care and social assistance' } },
  { code: '71', name: { fr: 'Arts, spectacles et loisirs', en: 'Arts, entertainment and recreation' } },
  { code: '72', name: { fr: "Services d'hébergement et de restauration", en: 'Accommodation and food services' } },
  { code: '81', name: { fr: 'Autres services (sauf les administrations publiques)', en: 'Other services (except public administration)' } },
  { code: '91', name: { fr: 'Administrations publiques', en: 'Public administration' } },
]

export const scianUrl: Text = {
  fr: 'https://www.statcan.gc.ca/fr/sujets/norme/scian/2022/v1/index',
  en: 'https://www.statcan.gc.ca/en/subjects/standard/naics/2022/v1/index',
}

const essorNotPrioritized = ['11', '21', '22', '23', '51', '52', '53', '54', '55', '56', '61', '62', '71', '72', '81', '91']

const essorSectorNote: Text = {
  fr: "Depuis le 13 mars 2026, les demandes de certains secteurs ne sont pas priorisées (dont les SCIAN 54, 561 et 81, ainsi que 11, 21, 22, 23, 515, 517, 52, 53, 55, 61, 62, 71, 72 et 91, avec des exceptions). Confirmez avec Investissement Québec que votre activité est visée.",
  en: 'Since March 13, 2026, applications from some sectors are not prioritized (including NAICS 54, 561 and 81, as well as 11, 21, 22, 23, 515, 517, 52, 53, 55, 61, 62, 71, 72 and 91, with exceptions). Confirm with Investissement Québec that your activity is covered.',
}

const essorCommon: Text[] = [
  { fr: 'Site web disponible en français', en: 'Website available in French' },
  { fr: "Preuve de francisation (certificat ou attestation de l'OQLF) à partir de 25 employés", en: 'Proof of francization (certificate or OQLF attestation) from 25 employees' },
  { fr: "Entreprise inscrite au Québec, sans inscription au RENA et sans défaut sur une aide québécoise des 2 dernières années", en: 'Business registered in Quebec, not on the RENA list, with no default on Quebec aid in the last 2 years' },
  { fr: "Aucune dépense faite et aucun contrat signé avant le dépôt de la demande", en: 'No expense made and no contract signed before the application is filed' },
  { fr: "Pas d'autre aide du ministère de l'Économie sur le même projet", en: 'No other Ministry of Economy aid on the same project' },
  { fr: "Offre de service rédigée en français par un prestataire québécois", en: 'Service offer written in French by a Quebec provider' },
]

const quebecCityNote: Text = {
  fr: "Secteurs admissibles : agroalimentaire; produits et technologies numériques (sans les services et la consultation); manufacturier et industrie 4.0; optique-photonique et électronique de pointe; sciences de la vie; technologies propres. Les entreprises d'économie sociale de tous les secteurs, sauf le commerce de détail et la restauration, sont aussi visées.",
  en: 'Eligible sectors: agri-food; digital products and technologies (not services or consulting); manufacturing and industry 4.0; optics-photonics and advanced electronics; life sciences; cleantech. Social-economy enterprises of all sectors, except retail and restaurants, are also covered.',
}

const quebecCityGeoNote: Text = {
  fr: "Le programme vise l'agglomération de Québec (Québec, Saint-Augustin-de-Desmaures, L'Ancienne-Lorette) et Wendake.",
  en: 'The program covers the Québec City agglomeration (Québec, Saint-Augustin-de-Desmaures, L\'Ancienne-Lorette) and Wendake.',
}

const quebecCitySectors = {
  only: ['31-33', '11', '22', '51', '54', '56', '62', '71'],
  confirm: ['11', '22', '51', '54', '56', '62', '71'],
}

export const programs: Program[] = [
  {
    id: 'essor-1b',
    name: { fr: 'ESSOR, volet 1B : diagnostic et plan numériques', en: 'ESSOR, stream 1B: digital diagnostic and plan' },
    type: 'grant',
    administrator: { fr: 'Investissement Québec (ministère de l\'Économie, de l\'Innovation et de l\'Énergie)', en: 'Investissement Québec (Ministry of Economy, Innovation and Energy)' },
    covers: {
      fr: 'Honoraires de consultants externes pour un diagnostic numérique, un plan numérique, l\'analyse des projets prioritaires et le choix de systèmes.',
      en: 'External consultant fees for a digital diagnostic, a digital plan, analysis of priority projects and system selection.',
    },
    amount: {
      fr: "Subvention de 50 % des dépenses admissibles, jusqu'à 20 000 $ par entreprise pour toute la durée du programme.",
      en: 'Grant of 50% of eligible expenses, up to $20,000 per company for the life of the program.',
    },
    verify: [
      ...essorCommon,
      { fr: "Autodiagnostic ADN 4.0 de ClicSEQUR, états financiers de 2 ans et plan stratégique récent", en: 'ClicSEQUR ADN 4.0 self-diagnostic, 2 years of financial statements and a recent strategic plan' },
    ],
    status: { fr: 'Ouvert; la réception des demandes peut être suspendue sans préavis', en: 'Open; intake can be suspended without notice' },
    end: '2027-03-31',
    verified: '2026-11-16',
    url: 'https://www.investquebec.com/fr/financement/programmes-gouvernementaux/essor/appui-la-concretisation-de-projets-dinvestissement',
    rules: {
      employeesMax: 250,
      revenueMin: 2500000,
      projects: ['diagnostic'],
      sectors: { confirm: essorNotPrioritized },
      sectorNote: essorSectorNote,
    },
  },
  {
    id: 'essor-1c',
    name: { fr: 'ESSOR, volet 1C : mise en oeuvre du plan numérique', en: 'ESSOR, stream 1C: digital plan implementation' },
    type: 'grant',
    administrator: { fr: 'Investissement Québec (ministère de l\'Économie, de l\'Innovation et de l\'Énergie)', en: 'Investissement Québec (Ministry of Economy, Innovation and Energy)' },
    covers: {
      fr: "Honoraires de consultants externes pour mettre en oeuvre un plan numérique issu d'un volet 1B. L'installation d'équipement et les dépenses en capital ne sont pas couvertes.",
      en: 'External consultant fees to implement a digital plan from a stream 1B. Equipment installation and capital expenses are not covered.',
    },
    amount: {
      fr: "Subvention de 50 % des dépenses admissibles, jusqu'à 50 000 $ par entreprise pour toute la durée du programme.",
      en: 'Grant of 50% of eligible expenses, up to $50,000 per company for the life of the program.',
    },
    verify: [
      { fr: "Un plan numérique issu d'un volet 1B, réalisé au cours des 24 derniers mois (il peut avoir été fait par une autre personne que moi)", en: 'A digital plan from a stream 1B completed in the last 24 months (it can have been made by someone other than me)' },
      ...essorCommon,
    ],
    status: { fr: 'Ouvert; la réception des demandes peut être suspendue sans préavis', en: 'Open; intake can be suspended without notice' },
    end: '2027-03-31',
    verified: '2026-11-16',
    url: 'https://www.investquebec.com/fr/financement/programmes-gouvernementaux/essor/appui-la-concretisation-de-projets-dinvestissement',
    rules: {
      employeesMax: 250,
      revenueMin: 2500000,
      projects: ['implementation'],
      sectors: { confirm: essorNotPrioritized },
      sectorNote: essorSectorNote,
    },
  },
  {
    id: 'essor-1a',
    name: { fr: 'ESSOR, volet 1A : étude de faisabilité', en: 'ESSOR, stream 1A: feasibility study' },
    type: 'grant',
    administrator: { fr: 'Investissement Québec (ministère de l\'Économie, de l\'Innovation et de l\'Énergie)', en: 'Investissement Québec (Ministry of Economy, Innovation and Energy)' },
    covers: {
      fr: "Études de faisabilité d'un projet d'investissement au Québec : marché, choix de site, évaluation de procédé ou de technologie, cadre réglementaire. Exclut les diagnostics et plans numériques (volet 1B).",
      en: 'Feasibility studies of an investment project in Quebec: market, site selection, process or technology evaluation, regulatory framework. Excludes digital diagnostics and plans (stream 1B).',
    },
    amount: {
      fr: "Subvention de 50 % des dépenses admissibles, jusqu'à 50 000 $ par projet.",
      en: 'Grant of 50% of eligible expenses, up to $50,000 per project.',
    },
    verify: [
      { fr: "Les retombées du projet d'investissement doivent être considérables", en: "The investment project's benefits must be considerable" },
      ...essorCommon.slice(0, 4),
      { fr: "États financiers de 2 ans (au moins une mission de compilation)", en: '2 years of financial statements (at least a compilation engagement)' },
    ],
    status: { fr: 'Ouvert; la réception des demandes peut être suspendue sans préavis', en: 'Open; intake can be suspended without notice' },
    end: '2027-03-31',
    verified: '2026-11-16',
    url: 'https://www.investquebec.com/fr/financement/programmes-gouvernementaux/essor/appui-la-concretisation-de-projets-dinvestissement',
    rules: {
      projects: ['feasibility'],
      sectors: { confirm: ['54', '56'] },
      sectorNote: {
        fr: 'Depuis le 13 mars 2026, les services professionnels, scientifiques et techniques (SCIAN 54) et les services administratifs et de soutien (561) ne sont pas priorisés. Confirmez avec Investissement Québec.',
        en: 'Since March 13, 2026, professional, scientific and technical services (NAICS 54) and administrative and support services (561) are not prioritized. Confirm with Investissement Québec.',
      },
    },
  },
  {
    id: 'essor-2',
    name: { fr: 'ESSOR, volet 2 : investissement pour la productivité', en: 'ESSOR, stream 2: productivity investment' },
    type: 'loan',
    administrator: { fr: 'Investissement Québec (ministère de l\'Économie, de l\'Innovation et de l\'Énergie)', en: 'Investissement Québec (Ministry of Economy, Innovation and Energy)' },
    covers: {
      fr: "Dépenses en capital d'un projet : acquisition et implantation d'équipements ou de logiciels, transition technologique importante (infonuagique, intelligence d'affaires, intelligence artificielle). Vos honoraires comptent s'ils sont capitalisés dans le projet.",
      en: 'Capital expenses of a project: acquisition and set-up of equipment or software, major technology transition (cloud, business intelligence, artificial intelligence). Your fees count if they are capitalized in the project.',
    },
    amount: {
      fr: "Surtout un prêt ou une garantie de prêt; une contribution non remboursable est possible dans certains cas. Aide d'au plus 25 % des dépenses admissibles.",
      en: 'Mostly a loan or a loan guarantee; a non-repayable contribution is possible in some cases. Aid of at most 25% of eligible expenses.',
    },
    verify: [
      { fr: "Dépenses admissibles d'au moins 100 000 $", en: 'Eligible expenses of at least $100,000' },
      { fr: "Entreprise viable, capable de rembourser, avec des états financiers des trois dernières années", en: 'Viable business able to repay, with financial statements for the last three years' },
      { fr: "Pour une entreprise existante, hausse de 20 % de ses immobilisations (moins si les retombées sont importantes)", en: 'For an existing business, a 20% increase in its fixed assets (less if the economic spin-offs are significant)' },
      { fr: "Mise de fonds privée d'au moins 20 % du coût du projet", en: 'Private contribution of at least 20% of the project cost' },
      { fr: "Pas d'autre aide du ministère de l'Économie sur le même projet; mêmes exclusions que le volet 1", en: 'No other Ministry of Economy aid on the same project; same exclusions as stream 1' },
    ],
    status: { fr: 'Ouvert; Investissement Québec peut suspendre la réception des demandes', en: 'Open; Investissement Québec may suspend intake' },
    end: '2027-03-31',
    verified: '2026-11-16',
    url: 'https://www.investquebec.com/fr/financement/programmes-gouvernementaux/essor/essor-volet-2',
    rules: { projects: ['purchase'] },
  },
  {
    id: 'quebec-bons',
    name: { fr: "Ville de Québec, bons d'accompagnement", en: 'Ville de Québec, consulting vouchers' },
    type: 'grant',
    administrator: { fr: 'Ville de Québec', en: 'Ville de Québec' },
    covers: {
      fr: "Services-conseils professionnels spécialisés : honoraires professionnels, services-conseils et études. Vous choisissez le consultant.",
      en: 'Specialized professional consulting services: professional fees, consulting services and studies. You choose the consultant.',
    },
    amount: {
      fr: "Subvention de 30 % des dépenses admissibles, jusqu'à 30 000 $ par entreprise par année.",
      en: 'Grant of 30% of eligible expenses, up to $30,000 per company per year.',
    },
    verify: [
      { fr: "Entreprise constituée dont le siège social est dans l'agglomération de Québec ou à Wendake", en: 'Incorporated company with its head office in the Québec City agglomeration or in Wendake' },
      { fr: "La Ville doit approuver le mandat du consultant avant la signature du contrat", en: 'The City must approve the consultant\'s mandate before the contract is signed' },
      { fr: "Aucune dépense avant le dépôt d'une demande complète", en: 'No expense before a complete application is filed' },
      { fr: "Pas d'inscription au RENA, pas de faillite non libérée, pas de somme due à la Ville", en: 'Not on the RENA list, no undischarged bankruptcy, nothing owed to the City' },
      { fr: "Le montant dépend des fonds disponibles", en: 'The amount depends on available funds' },
    ],
    status: { fr: 'Ouvert en continu', en: 'Open, continuous' },
    end: null,
    verified: '2026-11-16',
    url: 'https://www.ville.quebec.qc.ca/gens_affaires/financement/productivite/bons-accompagnement.aspx',
    rules: {
      projects: ['diagnostic', 'feasibility', 'implementation'],
      sectors: quebecCitySectors,
      sectorNote: quebecCityNote,
      geo: { in: ['quebec-agglomeration'] },
      geoNote: quebecCityGeoNote,
    },
  },
  {
    id: 'quebec-capitale',
    name: { fr: 'Ville de Québec, Capitale-Productivité', en: 'Ville de Québec, Capitale-Productivité' },
    type: 'grant',
    administrator: { fr: 'Ville de Québec', en: 'Ville de Québec' },
    covers: {
      fr: "Acquisition et installation d'équipements de production, d'opération ou de technologies, et acquisition de données. Les honoraires de consultants ne comptent qu'en appui à ces dépenses.",
      en: 'Acquisition and installation of production or operating equipment or technology, and data acquisition. Consultant fees count only in support of these expenses.',
    },
    amount: {
      fr: "Subvention d'au plus 40 % des dépenses admissibles (40 % jusqu'à une contribution de 250 000 $, 30 % de 250 000 $ à 500 000 $), jusqu'à 500 000 $.",
      en: 'Grant of at most 40% of eligible expenses (40% up to a $250,000 contribution, 30% from $250,000 to $500,000), up to $500,000.',
    },
    verify: [
      { fr: "Projet situé dans l'agglomération de Québec ou à Wendake (siège social n'importe où)", en: 'Project located in the Québec City agglomeration or in Wendake (head office anywhere)' },
      { fr: "Aucune dépense avant le dépôt d'une demande complète", en: 'No expense before a complete application is filed' },
      { fr: "Salaires, frais d'exploitation courants, terrains et bâtiments exclus", en: 'Salaries, regular operating costs, land and buildings excluded' },
      { fr: "Pas d'inscription au RENA, pas de faillite non libérée, pas de somme due à la Ville", en: 'Not on the RENA list, no undischarged bankruptcy, nothing owed to the City' },
      { fr: "Le montant dépend des fonds disponibles", en: 'The amount depends on available funds' },
    ],
    status: { fr: 'Ouvert', en: 'Open' },
    end: null,
    verified: '2026-11-16',
    url: 'https://www.ville.quebec.qc.ca/gens_affaires/financement/productivite/capitale-productivite.aspx',
    rules: {
      projects: ['purchase'],
      sectors: quebecCitySectors,
      sectorNote: quebecCityNote,
      geo: { in: ['quebec-agglomeration'] },
      geoNote: quebecCityGeoNote,
    },
  },
  {
    id: 'pme-mtl-innovation',
    name: { fr: 'PME MTL, Fonds innovation, productivité et développement durable', en: 'PME MTL, Innovation, Productivity and Sustainable Development Fund' },
    type: 'grant',
    administrator: { fr: 'PME MTL (pôles de l\'île de Montréal)', en: 'PME MTL (Island of Montréal poles)' },
    covers: {
      fr: "Dépenses d'un projet d'affaires : améliorer la productivité (équipement technologique, robotisation, automatisation), tester et lancer une innovation, adopter des technologies propres.",
      en: 'Expenses of a business project: improve productivity (technology equipment, robotics, automation), test and launch an innovation, adopt clean technologies.',
    },
    amount: {
      fr: "Subvention d'au plus 50 000 $, sans dépasser 80 % du coût du projet; vous mettez 20 %.",
      en: 'Grant of at most $50,000, not exceeding 80% of the project cost; you put in 20%.',
    },
    verify: [
      { fr: "Les honoraires de consultant sont-ils admissibles : à confirmer auprès du pôle PME MTL", en: 'Whether consultant fees are eligible: confirm with the PME MTL pole' },
      { fr: "Établissement à Montréal et siège social au Québec; entreprise constituée; citoyen, résident permanent ou titulaire d'un CSQ", en: 'Establishment in Montréal and head office in Quebec; incorporated; citizen, permanent resident or CSQ holder' },
      { fr: "Plan d'affaires, prévisions financières de 2 ans, mission de compilation des 2 derniers exercices, démarche en développement durable", en: 'Business plan, 2-year financial forecasts, compilation engagement for the last 2 years, sustainable development approach' },
      { fr: "Enveloppe limitée; une source tierce indique que le fonds est fermé : confirmez qu'il reçoit des demandes", en: 'Limited budget; a third-party source lists the fund as closed: confirm it accepts applications' },
    ],
    status: { fr: 'Ouvert, enveloppe limitée', en: 'Open, limited budget' },
    end: null,
    verified: '2026-11-16',
    url: 'https://pmemtl.com/services/fonds-innovation-productivite-developpement-durable',
    urlEn: 'https://pmemtl.com/en/services/innovation-productivity-and-sustainable-development-fund',
    rules: {
      projects: ['implementation', 'purchase', 'rd'],
      geo: { in: ['montreal-ile'] },
      geoNote: { fr: "Le fonds vise les entreprises ayant un établissement sur l'île de Montréal.", en: 'The fund covers businesses with an establishment on the island of Montréal.' },
    },
  },
  {
    id: 'desjardins-fonds-c',
    name: { fr: 'Fonds C de Desjardins', en: 'Desjardins Fonds C' },
    type: 'grant',
    administrator: { fr: 'Mouvement Desjardins (votre caisse ou centre Desjardins Entreprises)', en: 'Mouvement Desjardins (your caisse or Desjardins Entreprises centre)' },
    covers: {
      fr: "Projets de 9 catégories, dont la transformation numérique (ERP, CRM, optimisation des processus), la cybersécurité, l'innovation, les ressources humaines et le développement des marchés.",
      en: 'Projects in 9 categories, including digital transformation (ERP, CRM, process optimization), cybersecurity, innovation, human resources and market development.',
    },
    amount: {
      fr: "Aide non remboursable jusqu'à 20 000 $ (selon le formulaire : 25 % du projet, de 5 000 $ à 20 000 $).",
      en: 'Non-repayable aid of up to $20,000 (per the form: 25% of the project, from $5,000 to $20,000).',
    },
    verify: [
      { fr: "Membre de Desjardins, titulaire d'un compte courant d'entreprise (on peut le devenir en faisant la demande)", en: 'Desjardins member holding a business current account (you can become one when you apply)' },
      { fr: "Secteur commercial-industriel, agricole, agroalimentaire ou techno", en: 'Commercial-industrial, agricultural, agri-food or tech sector' },
      { fr: "Un comité de la caisse décide; aucune date d'appel, la demande passe par votre conseiller", en: 'A caisse committee decides; no call dates, the application goes through your advisor' },
      { fr: "L'acceptation de la facture d'un consultant externe est à confirmer auprès de la caisse", en: "Whether an outside consultant's invoice is accepted: confirm with your caisse" },
    ],
    status: { fr: 'Ouvert; aucune date de fin publiée', en: 'Open; no end date published' },
    end: null,
    verified: '2026-11-16',
    url: 'https://www.desjardins.com/fr/a-propos/communaute/developpement-collectif/fonds-c.html',
    rules: {
      projects: ['diagnostic', 'implementation', 'purchase', 'training', 'rd', 'export'],
      sectors: { confirm: ['53'] },
      sectorNote: { fr: "Le secteur immobilier est exclu : confirmez que votre activité ne l'est pas.", en: 'The real-estate sector is excluded: confirm your activity is not.' },
    },
  },
  {
    id: 'mfor',
    name: { fr: 'MFOR, volet entreprises : formation de la main-d\'oeuvre', en: 'MFOR, employer stream: workforce training' },
    type: 'grant',
    administrator: { fr: "Ministère de l'Emploi et de la Solidarité sociale (Services Québec)", en: 'Ministère de l\'Emploi et de la Solidarité sociale (Services Québec)' },
    covers: {
      fr: "La formation de vos employés seulement : analyse des besoins, contenu de formation, honoraires de formateurs, salaires des personnes en formation. Ne paie pas le développement ni le déploiement d'un système.",
      en: 'Training of your employees only: needs analysis, training content, trainer fees, wages of trainees. Does not pay for building or deploying a system.',
    },
    amount: {
      fr: "Subvention, en général jusqu'à 50 % des dépenses admissibles; 75 % pour la formation liée à de nouveaux équipements, à une nouvelle technologie ou aux technologies de l'information (premières dépenses de 133 333 $), jusqu'à 100 000 $ par entente.",
      en: 'Grant, generally up to 50% of eligible expenses; 75% for training tied to new equipment, new technology or information technology (first $133,333 of expenses), up to $100,000 per agreement.',
    },
    verify: [
      { fr: "Employeur du Québec avec un NEQ; priorité aux PME de 6 à 99 employés", en: 'Quebec employer with a NEQ; priority to small businesses of 6 to 99 employees' },
      { fr: "Formation en français (exception si elle n'existe pas en français) et attestation écrite en fin de formation", en: 'Training in French (exception if none exists in French) and a written attestation at the end' },
      { fr: "Le formateur doit être approuvé par le ministère; négociation d'un plan avec un conseiller de Services Québec", en: 'The trainer must be approved by the Ministry; a plan is negotiated with a Services Québec adviser' },
      { fr: "Les logiciels de bureautique et de comptabilité courants ne sont pas de nouvelles technologies", en: 'Common office and accounting software are not new technologies' },
      { fr: "Pas d'inscription au RENA; francisation conforme; pas de grève ni de lock-out", en: 'Not on the RENA list; francization compliant; no strike or lockout' },
    ],
    status: { fr: 'Ouvert en continu, selon les budgets disponibles', en: 'Open, continuous, subject to budget' },
    end: null,
    verified: '2026-11-16',
    url: 'https://www.quebec.ca/entreprises-et-travailleurs-autonomes/administrer-gerer/embauche-gestion-personnel/former-main-oeuvre/developper-competences',
    rules: { projects: ['training'] },
  },
  {
    id: 'fli-fls',
    name: { fr: 'Fonds locaux d\'investissement (FLI) et de solidarité (FLS) des MRC', en: 'MRC local investment (FLI) and solidarity (FLS) funds' },
    type: 'loan',
    administrator: { fr: 'Votre MRC ou territoire équivalent (FLI); Fonds de solidarité FTQ (FLS)', en: 'Your MRC or equivalent territory (FLI); Fonds de solidarité FTQ (FLS)' },
    covers: {
      fr: "Projets d'amélioration de la productivité, de transformation numérique et de croissance. Les honoraires professionnels préalables (faisabilité, audit externe) et ceux liés à l'implantation de technologie sont admissibles.",
      en: 'Productivity, digital transformation and growth projects. Prior professional fees (feasibility, external audit) and fees tied to technology implementation are eligible.',
    },
    amount: {
      fr: "Un prêt (ou prêt participatif), pas une subvention : FLI jusqu'à 50 % des dépenses et 150 000 $ par période de 12 mois; FLS jusqu'à 250 000 $ selon le territoire. Chaque MRC fixe son taux d'intérêt.",
      en: 'A loan (or participating loan), not a grant: FLI up to 50% of expenses and $150,000 per 12 months; FLS up to $250,000 depending on the territory. Each MRC sets its interest rate.',
    },
    verify: [
      { fr: "Rentable depuis plus d'un an pour un projet d'amélioration ou de transformation; fonds propres d'au moins 15 % après le projet", en: 'Profitable for over 1 year for an improvement or transformation project; equity of at least 15% after the project' },
      { fr: "Aucune dépense faite avant le dépôt de la demande", en: 'No expense made before the application is filed' },
      { fr: "La politique d'investissement de votre MRC peut ajouter des règles ou des secteurs prioritaires", en: "Your MRC's investment policy may add rules or priority sectors" },
      { fr: "Pas d'inscription au RENA, francisation conforme, pas de défaut récent sur une aide", en: 'Not on the RENA list, francization compliant, no recent default on aid' },
      { fr: "Secteurs exclus : armes controversées, énergies fossiles, jeux de hasard, jeux violents, exploitation sexuelle, tabac et drogues", en: 'Excluded domains: controversial weapons, fossil fuels, gambling, violent games, sexual exploitation, tobacco and drugs' },
    ],
    status: { fr: 'Ouvert en continu, selon le budget de chaque MRC', en: "Open, continuous, subject to each MRC's budget" },
    end: '2028-12-31',
    verified: '2026-11-16',
    url: 'https://www.quebec.ca/entreprises-et-travailleurs-autonomes/aide-financiere/developpement-economique/fonds-locaux-investissement',
    officeByTerritory: true,
    rules: {
      employeesMax: 249,
      projects: ['diagnostic', 'feasibility', 'implementation', 'purchase'],
      geo: { out: ['montreal-ile', 'kativik'] },
      geoNote: { fr: "Les FLI sont gérés par les MRC et les territoires équivalents : l'île de Montréal (c'est PME MTL qui la dessert) et Kativik n'en ont pas.", en: 'FLI are run by MRCs and equivalent territories: the island of Montréal (served by PME MTL) and Kativik have none.' },
    },
  },
  {
    id: 'psce',
    name: { fr: 'PSCE : commercialisation et exportation', en: 'PSCE: commercialization and export' },
    type: 'grant',
    administrator: { fr: "Investissement Québec (ministère de l'Économie, de l'Innovation et de l'Énergie)", en: 'Investissement Québec (Ministry of Economy, Innovation and Energy)' },
    covers: {
      fr: "Préparation de marchés hors Québec : diagnostic ou plan d'exportation, stratégie, étude de marché, stratégie numérique pour les marchés étrangers, salons, certifications. Honoraires de consultants plafonnés à 25 000 $ par projet; logiciels et licences exclus.",
      en: 'Preparing markets outside Quebec: export diagnostic or plan, strategy, market study, digital strategy for foreign markets, trade shows, certifications. Consultant fees capped at $25,000 per project; software and licences excluded.',
    },
    amount: {
      fr: "Subvention de 50 % (1er projet), 40 % (2e) puis 25 %, jusqu'à 60 000 $ par entreprise par année.",
      en: 'Grant of 50% (1st project), 40% (2nd) then 25%, up to $60,000 per company per year.',
    },
    verify: [
      { fr: "Site web disponible en français; offre de service en français", en: 'Website available in French; service offer in French' },
      { fr: "Une seule aide du programme par exercice financier (du 1er avril au 31 mars)", en: 'One program aid per fiscal year (April 1 to March 31)' },
      { fr: "Dépenses admissibles d'au moins 50 000 $ pour une première demande; aucune dépense avant le dépôt", en: 'Eligible expenses of at least $50,000 for a first application; no expense before filing' },
      { fr: "Commerce de détail : seulement avec 5 M$ de revenus ou plus, activités de développement de produits et siège social au Québec", en: 'Retail: only with revenue of $5M or more, product-development activities and a Quebec head office' },
      { fr: 'La prochaine période de dépôt (printemps 2027) est à confirmer', en: 'The next filing window (spring 2027) is to be confirmed' },
    ],
    status: { fr: "Ouvert par périodes d'appel; fermé entre les périodes (prochaine : printemps 2027, à confirmer)", en: 'Open by call windows; closed between windows (next: spring 2027, to be confirmed)' },
    end: '2028-03-31',
    verified: '2026-11-16',
    url: 'https://www.investquebec.com/fr/financement/programmes-gouvernementaux/psce',
    rules: {
      revenueMin: 1000001,
      revenueMax: 50000000,
      projects: ['export'],
      sectors: { out: ['11', '21', '22', '23', '52', '53', '55', '56', '61', '62', '71', '72', '81', '91'], confirm: ['51', '44-45'] },
      sectorNote: {
        fr: "Secteurs exclus du volet 2 : agriculture, foresterie et pêche, mines et pétrole, services publics, construction, radiodiffusion et télécommunications, finance et assurances, immobilier, gestion de sociétés, services administratifs, enseignement, santé, arts, hébergement et restauration, autres services, administrations publiques. Le commerce de détail est visé sous conditions.",
        en: 'Sectors excluded from stream 2: agriculture, forestry and fishing, mining and oil and gas, utilities, construction, broadcasting and telecommunications, finance and insurance, real estate, management of companies, administrative services, education, health, arts, accommodation and food, other services, public administration. Retail is covered under conditions.',
      },
    },
  },
  {
    id: 'c3i',
    name: { fr: "C3i : crédit d'impôt pour investissement et innovation", en: 'C3i: investment and innovation tax credit' },
    type: 'taxCredit',
    administrator: { fr: 'Revenu Québec (règles : Finances Québec)', en: 'Revenu Québec (rules: Finances Québec)' },
    covers: {
      fr: "Matériel informatique neuf (catégorie 50, serveurs compris) et progiciels de gestion admissibles (ERP, CRM, chaîne d'approvisionnement), y compris l'intégration capitalisée. Services-conseils, formation et abonnements ordinaires à un logiciel en ligne ne sont pas couverts.",
      en: 'New computer hardware (class 50, servers included) and eligible management software (ERP, CRM, supply chain), including capitalized integration. Consulting, training and ordinary online-software subscriptions are not covered.',
    },
    amount: {
      fr: "Crédit d'impôt remboursable de 25 %, 20 % ou 15 % selon le territoire où le bien est utilisé.",
      en: 'Refundable tax credit of 25%, 20% or 15% depending on where the property is used.',
    },
    verify: [
      { fr: "Bien neuf, utilisé surtout au Québec pendant au moins 730 jours, acquis avant le 1er janvier 2030", en: 'New property, used mainly in Quebec for at least 730 days, acquired before January 1, 2030' },
      { fr: "Le même coût ne peut pas être réclamé aussi au CRIC", en: 'The same cost cannot also be claimed under the CRIC' },
      { fr: "Seuil d'exclusion par bien (5 000 $ ou 12 500 $ selon le bien, selon des sources secondaires) : à confirmer auprès de Revenu Québec ou de votre comptable", en: 'Exclusion threshold per asset ($5,000 or $12,500 depending on the asset, per secondary sources): confirm with Revenu Québec or your accountant' },
      { fr: "Un progiciel utilisé en mode abonnement n'est en général pas admissible : au cas par cas", en: 'Software used as a subscription is generally not eligible: case by case' },
    ],
    status: { fr: 'Ouvert (crédit demandé dans la déclaration de revenus)', en: 'Open (credit claimed on the tax return)' },
    end: '2029-12-31',
    verified: '2026-11-16',
    url: 'https://www.budget.finances.gouv.qc.ca/budget/outils/depenses-fiscales/fiches/fiche-210314.asp',
    rateByTerritory: true,
    rules: { projects: ['purchase'] },
  },
  {
    id: 'cric',
    name: { fr: "CRIC : crédit d'impôt pour la R-D, l'innovation et la précommercialisation", en: 'CRIC: R&D, innovation and pre-commercialization tax credit' },
    type: 'taxCredit',
    administrator: { fr: 'Revenu Québec (politique : Finances Québec)', en: 'Revenu Québec (policy: Finances Québec)' },
    covers: {
      fr: "R-D et précommercialisation faites au Québec : main-d'oeuvre, équipement et 50 % des contrats de sous-traitance faits au Québec avec une personne sans lien de dépendance.",
      en: 'R&D and pre-commercialization done in Quebec: labour, equipment and 50% of subcontracts done in Quebec with an arm\'s-length party.',
    },
    amount: {
      fr: "Crédit d'impôt remboursable de 30 % sur la première tranche de 1 M$ de dépenses admissibles au-dessus du seuil d'exclusion (au moins 50 000 $), 20 % au-delà.",
      en: 'Refundable tax credit of 30% on the first $1M of eligible expenses above the exclusion threshold (at least $50,000), 20% above.',
    },
    verify: [
      { fr: "De la vraie R-D (incertitude technologique) : l'automatisation ou l'intégration informatique courante n'en est normalement pas; à valider avec votre comptable", en: 'Genuine R&D (technological uncertainty): routine automation or IT integration is normally not; confirm with your accountant' },
      { fr: "Société avec un établissement au Québec; travaux faits au Québec", en: 'Corporation with an establishment in Quebec; work done in Quebec' },
      { fr: "Le même coût ne peut pas être réclamé aussi au C3i ni dans un autre crédit", en: 'The same cost cannot also be claimed under the C3i or another credit' },
    ],
    status: { fr: "Ouvert (crédit d'impôt, sans appel de projets)", en: 'Open (tax credit, no intake)' },
    end: null,
    verified: '2026-11-16',
    url: 'https://www.quebec.ca/entreprises-et-travailleurs-autonomes/gerer-finances/fiscalite/aide-fiscale-projets-r-d-innovation/credit-impot-recherche-innovation-commercialisation',
    urlEn: 'https://www.quebec.ca/en/gouvernement/finances-publiques/titre-par-defaut/tax-credit-r-d-commercialization',
    rules: { projects: ['rd'] },
  },
  {
    id: 'sred',
    name: { fr: "RS&DE : encouragement fiscal fédéral pour la recherche scientifique et le développement expérimental", en: 'SR&ED: federal tax incentive for scientific research and experimental development' },
    type: 'taxCredit',
    administrator: { fr: 'Agence du revenu du Canada', en: 'Canada Revenue Agency' },
    covers: {
      fr: "Salaires, matériaux, frais généraux, contrats de R-D faits au Canada pour votre compte (comptés à 80 %) et dépenses en capital. Le travail doit répondre à la définition de la RS&DE de l'ARC.",
      en: "Wages, materials, overhead, contracts for R&D done in Canada on your behalf (counted at 80%) and capital expenditures. The work must meet the CRA's SR&ED definition.",
    },
    amount: {
      fr: "Crédit d'impôt à l'investissement de 35 % pour une société privée sous contrôle canadien (SPCC) jusqu'à 6 M$ de dépenses, 15 % au-delà; en partie ou en totalité remboursable.",
      en: 'Investment tax credit of 35% for a Canadian-controlled private corporation (CCPC) up to $6M of expenditures, 15% above; partly or fully refundable.',
    },
    verify: [
      { fr: "Société canadienne imposable; travaux faits au Canada", en: 'Taxable Canadian corporation; work done in Canada' },
      { fr: "Incertitude technologique démontrée : le développement ou l'intégration courants n'y donnent pas droit", en: 'Technological uncertainty shown: routine development or integration does not qualify' },
      { fr: "Taux de 35 % réservé aux SPCC dont le capital imposable est inférieur à 75 M$", en: 'The 35% rate is for CCPCs with taxable capital under $75M' },
      { fr: "Le cumul avec le CRIC est permis en principe : à confirmer avec votre comptable", en: 'Combining with the CRIC is allowed in principle: confirm with your accountant' },
    ],
    status: { fr: "Ouvert (crédit d'impôt, sans appel de projets)", en: 'Open (tax incentive, no intake)' },
    end: null,
    verified: '2026-11-16',
    url: 'https://www.canada.ca/en/revenue-agency/services/scientific-research-experimental-development-tax-incentive-program/investment-tax-credit-policy.html',
    rules: { projects: ['rd'] },
  },
  {
    id: 'irap',
    name: { fr: 'PARI-CNRC : aide à la recherche industrielle', en: 'NRC IRAP: Industrial Research Assistance Program' },
    type: 'grant',
    administrator: { fr: 'Conseil national de recherches du Canada', en: 'National Research Council of Canada' },
    covers: {
      fr: "Recherche et développement de produits et de services technologiques innovants. N'achète ni n'intègre d'outils existants.",
      en: 'Research and development of innovative technology products and services. Does not fund buying or integrating existing tools.',
    },
    amount: {
      fr: "Contribution non remboursable pour un projet; en général de 50 000 $ à 1 M$.",
      en: 'Non-repayable contribution for a project; generally $50,000 to $1M.',
    },
    verify: [
      { fr: "Société constituée à but lucratif (pas une entreprise individuelle, une société de personnes ni une coopérative)", en: 'Incorporated for-profit company (not a sole proprietorship, partnership or cooperative)' },
      { fr: "Le premier contact se fait par téléphone avec un conseiller du PARI : 1-877-994-4727", en: 'First contact is by phone with an IRAP advisor: 1-877-994-4727' },
      { fr: "Les dépenses avant l'approbation ne sont pas admissibles (source secondaire)", en: 'Expenses before approval are not eligible (secondary source)' },
    ],
    status: { fr: 'Ouvert en continu; aucune date de fin publiée', en: 'Open, ongoing; no end date published' },
    end: null,
    verified: '2026-10-27',
    url: 'https://nrc.canada.ca/en/support-technology-innovation/financial-support-technology-innovation',
    rules: { employeesMax: 500, projects: ['rd'] },
  },
  {
    id: 'regi',
    name: { fr: 'DEC, Croissance économique régionale par l\'innovation, volet croissance et productivité des entreprises', en: 'CED, Regional Economic Growth through Innovation (REGI), business scale-up and productivity' },
    type: 'loan',
    administrator: { fr: 'Développement économique Canada pour les régions du Québec', en: 'Canada Economic Development for Quebec Regions' },
    covers: {
      fr: "Croissance, productivité et compétitivité par l'innovation : adoption et adaptation de technologies avancées, nouveaux procédés de production. Tous les coûts directement liés au projet jugés raisonnables par DEC.",
      en: 'Growth, productivity and competitiveness through innovation: adoption and adaptation of advanced technologies, new production processes. All costs directly related to the project that CED deems reasonable.',
    },
    amount: {
      fr: "Contribution remboursable sans intérêt, en général jusqu'à 50 % des coûts autorisés pour une PME; remboursement à partir de 2 ans après la fin du projet.",
      en: 'Interest-free repayable contribution, generally up to 50% of authorized costs for an SME; repayment starts 2 years after the project ends.',
    },
    verify: [
      { fr: "PME établie au Québec; communiquez d'abord avec le Service d'information aux entreprises de DEC", en: 'SME located in Quebec; contact the CED Business Information Service first' },
      { fr: "Taille de PME, montants minimal et maximal et règles sur les fournisseurs non précisés : à demander à DEC", en: 'SME size, minimum and maximum amounts and supplier rules are not stated: ask CED' },
      { fr: "Coûts rétroactifs, refinancement, terrain et achalandage exclus", en: 'Retroactive costs, refinancing, land and goodwill excluded' },
      { fr: "C'est un prêt que vous remboursez : peu adapté à de petites factures de consultation", en: 'It is a loan you repay: a poor fit for small consulting invoices' },
    ],
    status: { fr: 'Ouvert en continu; aucune date de fin publiée', en: 'Open, ongoing; no end date published' },
    end: null,
    verified: '2026-11-16',
    url: 'https://www.canada.ca/en/economic-development-quebec-regions/financing-services/business-scale-up-and-productivity.html',
    rules: {
      projects: ['purchase', 'implementation', 'rd'],
      sectors: { confirm: ['23', '44-45', '48-49', '62', '72', '81'] },
      sectorNote: {
        fr: "Ne sont pas admissibles : le commerce de détail, les services de restauration, les services de transport, la construction résidentielle, les garderies, les salons de coiffure et d'esthétique, les boîtes de nuit et bars. Confirmez que votre activité n'en fait pas partie.",
        en: 'Not eligible: retail businesses, food services, transportation services, housing construction, daycare services, hair and beauty salons, nightclubs and bars. Confirm your activity is not one of them.',
      },
    },
  },
  {
    id: 'bdc-lift',
    name: { fr: 'BDC LIFT : transformation numérique et IA', en: 'BDC LIFT: digital transformation and AI' },
    type: 'loan',
    administrator: { fr: 'Banque de développement du Canada (BDC)', en: 'Business Development Bank of Canada (BDC)' },
    covers: {
      fr: "Adoption du numérique, des données, de l'IA et de la cybersécurité : ERP, CRM, infrastructure de données, intégration, formation et frais de mise en oeuvre.",
      en: 'Adoption of digital, data, AI and cybersecurity: ERP, CRM, data infrastructure, integration, training and implementation costs.',
    },
    amount: {
      fr: "Prêt de 25 000 $ à 2 M$ à taux préférentiel lorsque les solutions viennent de fournisseurs ou d'intégrateurs canadiens.",
      en: 'Loan of $25,000 to $2M at a preferential rate when solutions come from Canadian suppliers or integrators.',
    },
    verify: [
      { fr: "Un plan de BDC Services-conseils est obligatoire (il vient de BDC, pas d'un consultant externe)", en: 'A BDC Advisory Services plan is required (it comes from BDC, not from an outside consultant)' },
      { fr: "Critères de crédit de BDC : rentabilité, solidité financière, bon dossier de crédit", en: 'BDC credit criteria: profitability, financial strength, good credit history' },
      { fr: "Solutions de fournisseurs ou d'intégrateurs canadiens qualifiés", en: 'Solutions from qualified Canadian suppliers or integrators' },
      { fr: "Le volet productivité (équipement) est distinct : 5 M$ de revenus et secteurs listés", en: 'The productivity track (equipment) is separate: $5M revenue and listed sectors' },
    ],
    status: { fr: 'Ouvert depuis le 24 avril 2026; aucune date de fin publiée', en: 'Open since April 24, 2026; no end date published' },
    end: null,
    verified: '2026-11-16',
    url: 'https://www.bdc.ca/en/solutions/lift',
    rules: { revenueMin: 1000000, projects: ['implementation', 'purchase', 'training'] },
  },
]

export function oldestVerified(list: Program[] = programs): string {
  return list.map((p) => p.verified).sort()[0]
}

const monthsFr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export function formatDate(iso: string, lang: 'fr' | 'en'): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (lang === 'fr') return `${d === 1 ? '1er' : d} ${monthsFr[m - 1]} ${y}`
  return `${monthsEn[m - 1]} ${d}, ${y}`
}
