# Projets

Une sélection de projets que j'ai menés ou construits, avec le contexte de ce qu'a vraiment impliqué le travail.

## Catena {#catena}

**Contexte** - Je développe des applications depuis 2013 et je fais rouler mes propres entreprises sur de l'infrastructure auto-hébergée depuis 2021. Catena, c'est cette expérience transformée en produit.

**Problème** - Les PME veulent sortir des logiciels facturés par employé. Presque aucune ne peut opérer l'alternative. Installer les logiciels, c'est la partie facile. Ce qui coule l'auto-hébergement dans une entreprise de quinze personnes, c'est la sauvegarde que personne n'a vérifiée, la mise à jour que personne n'ose appliquer et l'identifiant que personne ne sait comment révoquer.

**Mon rôle** - Seul architecte et développeur. Conception du produit, installateur, interface d'administration, sauvegarde et restauration, documentation bilingue, et le banc de test automatisé qui prouve que tout fonctionne encore après chaque changement.

**Résultat** - Un serveur vierge devient une suite d'applications d'affaires en marche, avec authentification, sauvegardes, surveillance et restauration intégrées dès le départ plutôt qu'ajoutées après coup. Chaque affirmation sur le site du produit remonte à un scénario automatisé qui a roulé et qui a passé. C'est la compilation qui applique cette règle, pas la bonne volonté.

**Stack** - Ansible, Docker Swarm, Traefik, Keycloak avec oauth2-proxy, Portainer, PostgreSQL, restic vers S3 avec verrouillage d'objets, Tailscale, Cloudflared, un panneau d'administration en Go, GitHub CI/CD, et plus de 20 applications sélectionnées couvrant ERP, CRM, clavardage, documents, facturation, prise de rendez-vous et automatisation de flux de travail.

Chaque fonctionnalité est déclarée dans un registre qui la relie aux fichiers qui l'implémentent et aux scénarios qui la vérifient. Une fonctionnalité sans test fait échouer la compilation. Le banc de test provisionne de vraies machines, installe le produit, le brise délibérément et le restaure. Les restaurations de sauvegarde sont exercées. Le déménagement d'un client d'un serveur à un autre est exercé. Les cas négatifs sont testés, pas seulement le chemin facile où il n'y a aucun obstacle.

Le volet conformité est bâti de la même façon. Les sauvegardes aboutissent sur du stockage qui appartient au client, sous une forme qui ne peut être ni altérée ni supprimée en silence. Qui peut accéder à quoi se gère à un seul endroit et se révoque à un seul endroit. Les actions administratives sont enregistrées et ce qui s'est passé peut être reconstitué après coup. C'est la moitié technique de ce que la loi québécoise sur les renseignements personnels demande; l'autre moitié, c'est de la procédure, et elle est écrite elle aussi.

Deux morceaux sont volontairement publics sur GitHub : l'installateur et le catalogue d'applications. N'importe qui peut lire ce qui va rouler sur son serveur avant que ça roule.

Plus de détails sur [catena.run](https://catena.run).

## Chocolat Infini {#chocolate}

**Contexte** - J'ai lancé Chocolat Infini à partir de zéro en 2024, après un voyage au Costa Rica et en Équateur, et je l'opère encore seul aujourd'hui.

**Problème** - Le chocolat bean-to-bar est traditionnellement un métier d'intuition, ce qui rend difficile de faire évoluer les recettes et de reproduire les mêmes résultats d'une batch à l'autre. Le chocolat de grande qualité est aussi rare et dispendieux.

**Mon rôle** - J'ai tout bâti moi-même : j'ai modifié chaque machine, conçu les contrôleurs de température en boucle fermée et les PCB qui les pilotent, puis développé l'intégration logicielle entre le site web, le processeur de paiement et ERPNext.

**Résultat** - J'ai remporté des médailles d'or au [Craft Chocolat Challenge 2025](https://www.craftchocolatchallenge.com/season-four) avec plusieurs barres. La ligne de production est complètement instrumentée, ce qui me permet d'atteindre le même profil de façon fiable d'une batch à l'autre.

**Stack** - Home Assistant, PCB 2 couches sur mesure, contrôle de température en boucle fermée, ERPNext, WordPress/WooCommerce.

![chocolat-infini-home](/images/chocolat_infini_home.jpg)

C'est plus qu'une chocolaterie : c'est un laboratoire où je peux modifier les machines et optimiser le procédé de fabrication du chocolat.

Une des particularités les plus originales de cette petite opération, c'est que _chaque machine_ est modifiée et contrôlée à distance par un tableau de bord Home Assistant clair. Ça amène une rigueur industrielle à un métier traditionnellement artisanal, et ça m'a permis d'améliorer rapidement les recettes.

![ha-dashboard](/images/ha_dashboard.png)

Parmi les projets techniques liés au chocolat sur lesquels j'ai travaillé pour faire grossir l'entreprise :
- Un petit torréfacteur électrique à tambour Behmor en boucle fermée, qui torréfie les fèves de cacao parfaitement, peu importe la météo.

![roasting-curve](/images/roasting_curve.png)

- Des contrôleurs de température en boucle fermée pour chaque machine, incluant les mélangeurs à pierre qui broient les grués de cacao et le sucre en masse de chocolat, et les machines de tempérage qui font cristalliser le chocolat en une barre brun foncé, brillante et savoureuse. Ce n'est absolument PAS un circuit de pointe. C'est par contre une belle démonstration qu'un simple PCB deux couches peut être un outil incroyablement rentable.

![chocolate-controller](/images/chocolate_controller.jpg)

- L'emballage, que j'imprime et découpe à l'atelier avec une découpeuse à matrice.
- Une intégration logicielle complète entre le site web, le processeur de paiement et le logiciel de comptabilité/inventaire (ERPNext), ce qui sauve BEAUCOUP de temps à l'impôt ou quand vient le temps de commander de nouveaux ingrédients.

Visitez le site officiel pour tout savoir sur le chocolat : [chocolatinfini.com](https://chocolatinfini.com).

## Connaxio {#connaxio}

**Contexte** - Connaxio a été ma première entreprise : une petite boîte de consultation en électronique et logiciel, avec atelier de PCB, que j'ai fondée et opérée seul de 2021 à 2024.

**Problème** - Les petites équipes, laboratoires et fermes avaient besoin d'aide pour livrer de l'électronique sur mesure, du microprogramme et de l'automatisation, sans les frais fixes d'un gros fournisseur. Le truc, c'est que la même personne devait être à l'aise d'aller du schéma jusqu'au système déployé, parce que c'est exactement dans les transferts entre spécialistes que les petits projets meurent.

**Mon rôle** - J'ai fait chaque étape moi-même, de la saisie des schémas et du routage des PCB jusqu'à l'assemblage pick-and-place à l'interne, le microprogramme, la relation client et les opérations au quotidien.

**Résultat** - J'ai pris des mandats payants en automatisation, réseautique et électronique sur mesure pour une poignée de clients récurrents, j'ai publié plusieurs designs de circuits ouverts par-dessus, et j'ai bâti à l'interne une vraie capacité de fabrication à faible volume.

**Stack** - KiCad, LitePlacer avec OpenPnP, soudure par refusion, vision par ordinateur, impression 3D.

Après bien des révisions, je suis passé de « maximiser le nombre de pins dans le plus petit espace possible » à « faire un circuit réellement utilisable ».

![board-history](/images/boards_overview.jpg)

À noter que, contrairement à la plupart des concepteurs de PCB sains d'esprit, je fabriquais les cartes moi-même avec une machine pick-and-place LitePlacer sous OpenPnP. Pendant ces années-là, j'ai exploré en profondeur les limites du flux thermique, du contrôle de moteurs, de la vision par ordinateur et de l'impression 3D, et l'importance d'un bon éclairage et d'une bonne ventilation.

![pick-and-place-zoom](/images/pick_and_place_zoom.jpg)

![pick-and-place-overview](/images/pick_and_place_overview.jpg)

![connaxio-boards](/images/connaxio_boards.jpg)

Les projets de Connaxio ont leur propre page GitHub où vous pouvez tout apprendre à leur sujet : [connaxio.github.io](https://connaxio.github.io).

## Magnétomètre quantique {#quantum-magnetometer}

**Contexte** - J'ai travaillé avec [SBQuantum](https://sbquantum.com/) et l'Université de Sherbrooke de 2018 à 2020, d'abord comme stagiaire, puis dans le cadre de mon projet de fin d'études au bac, et finalement sur deux propositions financées.

**Problème** - L'objectif était de miniaturiser un magnétomètre modulaire de laboratoire sur un seul PCB, puis de qualifier une version qualité spatiale pour une mission CubeSat de mesure du champ magnétique terrestre.

**Mon rôle** - J'ai contribué au PCB mono-carte V2, dirigé la gestion de projet et le sous-système RF de la boucle à verrouillage de phase (PLL) sur la version qualité spatiale du projet de fin d'études, et en 2019-2020 j'ai dirigé la rédaction des propositions [MagQuest](https://www.magquest.com) Phase 2 et 3 tout en construisant des bancs de test pour la V3.

**Résultat** - La V2 a été le premier magnétomètre mono-carte de l'entreprise, et la lignée du capteur [est entrée en orbite en mars 2026](https://sbquantum.com/sbquantum_space_pr/) à bord d'un satellite de Spire Global, le tout premier déploiement spatial de SBQuantum, dans le cadre du programme MagQuest Phase 4.

**Stack** - Design de PCB à signaux mixtes, circuits RF et PLL, contrôle de lasers et de micro-ondes, physique des centres NV, rédaction de propositions techniques.

Comme stagiaire, j'ai travaillé sur le prototype V2 d'un magnétomètre quantique portable à base de diamant, une version miniaturisée de la V1 modulaire précédente.

Ce stage a mené à mon projet de fin d'études au baccalauréat, où on a travaillé sur une nouvelle version qualité spatiale de la carte pour l'équipe du Canadian CubeSat Project de l'Université de Sherbrooke. Je m'occupais surtout de la gestion de projet et du circuit de boucle à verrouillage de phase (PLL), un morceau de circuiterie RF pas mal coriace qu'on retrouve dans à peu près tous les systèmes de communication par antenne, et que la plupart des gens en électronique préfèrent acheter comme un module tout fait (moi le premier).

![qmsat-magnetometer](/images/qmsat_magneto.jpg)

Les champs magnétiques se mesurent en envoyant de la lumière verte sur un diamant dopé aux centres d'azote-vacance (NV) pour exciter certains de ses électrons, en appliquant un champ micro-ondes pour les faire précesser, puis en renvoyant de la lumière verte sur le diamant et en lisant l'amplitude de la lumière rouge qu'il émet. Oui, de la lumière rouge. La combinaison de la direction et de l'intensité du champ magnétique, et de la fréquence des micro-ondes, change l'amplitude de la lumière rouge émise et permet de mesurer le champ magnétique ambiant.

Ci-dessous, les 8x3 pics de la séquence de calibration. Les pics viennent en 4 paires de 3 mini-pics, répartis autour d'une fréquence centrale de 2,87 GHz, une paire par orientation NV possible dans le réseau cristallin du diamant. Les trois mini-pics viennent d'un phénomène qu'on appelle _hyperfine splitting_ (séparation hyperfine), ce qui veut dire, en gros, que le circuit fonctionne assez bien pour donner de vraies mesures et pas juste du bruit. C'est... un peu compliqué.

![resonance-calibration-sequence](/images/quantum_magnetometer_resonance_rays.png)

En 2019 et 2020, j'ai travaillé sur les propositions [MagQuest](https://www.magquest.com) Phase 2 et 3, où j'ai dirigé la rédaction de la proposition décrivant la conception d'une mission satellite pour mesurer le champ magnétique terrestre et mettre à jour le World Magnetic Model. J'ai aussi construit quelques bancs de test pour le magnétomètre (V3 à l'époque) et certains de ses composants.

Le déploiement MagQuest Phase 4, avec des partenaires comme la NGA, l'ESA, NASA Goddard et le ministère de la Défense nationale du Canada, continue exactement la ligne de travail décrite dans les propositions Phase 2 et 3 : utiliser un capteur à centres NV de diamant en orbite pour surveiller en continu le champ magnétique terrestre et permettre la navigation sans GPS.

## VAMUdeS {#drones}

**Contexte** - J'ai fait partie de VAMUdeS, l'équipe universitaire de drones autonomes de l'Université de Sherbrooke, de 2016 à 2018, et on participait chaque année au concours [AUVSI-SUAS](https://suas-competition.org/).

**Problème** - Le défi était de construire un système de surveillance aérienne entièrement autonome, capable de trouver, identifier et géolocaliser des cibles au sol depuis un drone qui vibrait à 60 m d'altitude et à 20 m/s, et de le faire mieux que toutes les autres équipes universitaires au concours.

**Mon rôle** - J'ai dirigé le système de surveillance géoréférencé, l'interface de la station au sol, le design RF et antennes (incluant la gestion des interférences entre le pilote manuel, l'autopilote et les liens caméra), et la qualité de service (QoS) réseau pour un lien air-sol souvent pénible. J'ai aussi co-conçu une de nos plateformes hexacoptères.

**Résultat** - On a gagné AUVSI-SUAS trois années de suite (2016, 2017 et 2018) avec une précision de géolocalisation brute vérifiée de 3 m dans les conditions de vol décrites plus haut.

**Stack** - Avionique embarquée, design RF et antennes, réseau avec QoS, interface de station au sol en Python, géobarrières et algorithmes d'évitement d'obstacles.

![Artemis](/images/vamudes_artemis.jpg)

J'ai rejoint [VAMUdeS](https://www.facebook.com/VAMUdeS/) comme étudiant au bac dès le début de mon baccalauréat en génie électrique. C'était vraiment le fun et, sans aucun doute, la meilleure partie de mes études. Les projets que j'ai menés incluent :
- Créer un système de surveillance aérienne géoréférencé avec une précision brute vérifiée de 3 mètres (depuis un drone qui vibrait à 60 mètres d'altitude et à 20 m/s)
- Concevoir une interface de contrôle pour surveiller et piloter ce système de surveillance, incluant le filtrage des données selon des géobarrières
- Améliorer les trois systèmes d'antennes et gérer les interférences RF entre les antennes du pilote manuel, de l'autopilote et de la caméra
- Concevoir un drone hexacoptère à partir de zéro (bien que le châssis ait été ajusté grâce aux simulations d'un autre étudiant en génie mécanique)
- Implémenter une QoS réseau pour un système de surveillance aérienne avec une bande passante parfois _vraiment mauvaise_
- Créer des algorithmes d'évitement d'obstacles
- Concevoir quelques circuits d'alimentation pour garder les drones en vol
- Transmettre les connaissances à la prochaine génération de _Vamudiens_

![Orion](/images/vamudes_orion.jpg)

Consultez les rapports techniques de notre équipe en [2016](/auvsi_suas-2016-journals-universite_de_sherbrooke.pdf), [2017](/auvsi_suas-2017-journals-universite_de_sherbrooke.pdf) et [2018](/auvsi_suas-2018-journals-universite_de_sherbrooke.pdf) pour comprendre de quoi il s'agit.
