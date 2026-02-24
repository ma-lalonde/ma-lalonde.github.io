# Magnétomètre quantique

## Résumé

**Contexte** — J'ai travaillé avec [SBQuantum](https://sbquantum.com/) et l'Université de Sherbrooke de 2018 à 2020, d'abord comme stagiaire, puis dans le cadre de mon projet de fin d'études au bac, et finalement sur deux propositions financées.

**Problème** — L'objectif était de miniaturiser un magnétomètre modulaire de laboratoire sur un seul PCB, puis de qualifier une version qualité spatiale pour une mission CubeSat de mesure du champ magnétique terrestre.

**Mon rôle** — J'ai contribué au PCB mono-carte V2, dirigé la gestion de projet et le sous-système RF de la boucle à verrouillage de phase (PLL) sur la version qualité spatiale du projet de fin d'études, et en 2019–2020 j'ai dirigé la rédaction des propositions [MagQuest](https://www.magquest.com) Phase 2 et 3 tout en construisant des bancs de test pour la V3.

**Résultat** — La V2 a été le premier magnétomètre mono-carte de l'entreprise, et la lignée du capteur [est entrée en orbite en mars 2026](https://sbquantum.com/sbquantum_space_pr/) à bord d'un satellite de Spire Global — le tout premier déploiement spatial de SBQuantum, dans le cadre du programme MagQuest Phase 4.

**Stack** — Design de PCB à signaux mixtes, circuits RF et PLL, contrôle de lasers et de micro-ondes, physique des centres NV, rédaction de propositions techniques.

## L'histoire complète

J'ai commencé à travailler avec [SBQuantum](https://sbquantum.com/) en 2018 sur un magnétomètre quantique portable à base de diamant — un dispositif qui utilise un diamant dopé aux centres d'azote-vacance (NV), des lasers verts et des micro-ondes pour mesurer le champ magnétique ambiant. À cette époque, on travaillait sur le prototype V2, une version miniaturisée de la V1 modulaire précédente. Ce nouveau PCB a été le premier magnétomètre mono-carte de l'entreprise.

Ce stage a mené à mon projet de fin d'études au baccalauréat, où on a travaillé sur une nouvelle version qualité spatiale de la carte pour l'équipe du Canadian CubeSat Project de l'Université de Sherbrooke. Je m'occupais surtout de la gestion de projet et du circuit de boucle à verrouillage de phase (PLL), un morceau de circuiterie RF pas mal coriace qu'on retrouve dans à peu près tous les systèmes de communication par antenne — et que la plupart des gens en électronique préfèrent acheter comme un module tout fait (moi le premier).

![qmsat-magnetometer](/images/qmsat_magneto.jpg)

Les champs magnétiques se mesurent en envoyant de la lumière verte sur un diamant dopé pour exciter certains de ses électrons, en appliquant un champ micro-ondes pour les faire précesser, puis en renvoyant de la lumière verte sur le diamant et en lisant l'amplitude de la lumière rouge qu'il émet. Oui, de la lumière rouge. La combinaison de la direction et de l'intensité du champ magnétique, et de la fréquence des micro-ondes, change l'amplitude de la lumière rouge émise et permet de mesurer le champ magnétique ambiant.

Ci-dessous, les 8×3 pics de la séquence de calibration. Les pics viennent en 4 paires de 3 mini-pics, répartis autour d'une fréquence centrale de 2,87 GHz, une paire par orientation NV possible dans le réseau cristallin du diamant. Les trois mini-pics viennent d'un phénomène qu'on appelle _hyperfine splitting_ (séparation hyperfine), ce qui veut dire, en gros, que le circuit fonctionne assez bien pour donner de vraies mesures et pas juste du bruit. C'est... un peu compliqué.

![resonance-calibration-sequence](/images/quantum_magnetometer_resonance_rays.png)

En 2019 et 2020, j'ai travaillé sur les propositions [MagQuest](https://www.magquest.com) Phase 2 et 3, où j'ai dirigé la rédaction de la proposition décrivant la conception d'une mission satellite pour mesurer le champ magnétique terrestre et mettre à jour le World Magnetic Model. J'ai aussi construit quelques bancs de test pour le magnétomètre (V3 à l'époque) et certains de ses composants.

En [mars 2026](https://sbquantum.com/sbquantum_space_pr/), SBQuantum a mis en orbite son premier magnétomètre quantique à bord d'un satellite de Spire Global — dans le cadre du déploiement MagQuest Phase 4, avec des partenaires comme la NGA, l'ESA, NASA Goddard et le ministère de la Défense nationale du Canada. La mission continue exactement la ligne de travail décrite dans les propositions Phase 2 et 3 : utiliser un capteur à centres NV de diamant en orbite pour surveiller en continu le champ magnétique terrestre et permettre la navigation sans GPS.
