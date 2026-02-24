# VAMUdeS

## Résumé

**Contexte** — J'ai fait partie de VAMUdeS, l'équipe universitaire de drones autonomes de l'Université de Sherbrooke, de 2016 à 2018, et on participait chaque année au concours [AUVSI-SUAS](https://suas-competition.org/).

**Problème** — Le défi était de construire un système de surveillance aérienne entièrement autonome, capable de trouver, identifier et géolocaliser des cibles au sol depuis un drone qui vibrait à 60 m d'altitude et à 20 m/s — et de le faire mieux que toutes les autres équipes universitaires au concours.

**Mon rôle** — J'ai dirigé le système de surveillance géoréférencé, l'interface de la station au sol, le design RF et antennes (incluant la gestion des interférences entre le pilote manuel, l'autopilote et les liens caméra), et la qualité de service (QoS) réseau pour un lien air-sol souvent pénible. J'ai aussi co-conçu une de nos plateformes hexacoptères.

**Résultat** — On a gagné AUVSI-SUAS trois années de suite — 2016, 2017 et 2018 — avec une précision de géolocalisation brute vérifiée de 3 m dans les conditions de vol décrites plus haut.

**Stack** — Avionique embarquée, design RF et antennes, réseau avec QoS, interface de station au sol en Python, géobarrières et algorithmes d'évitement d'obstacles.

## L'histoire complète

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

Nos plus grandes réussites incluent la victoire au [concours AUVSI-SUAS](https://suas-competition.org/) trois années de suite. Consultez les rapports techniques de notre équipe en [2016](/auvsi_suas-2016-journals-universite_de_sherbrooke.pdf), [2017](/auvsi_suas-2017-journals-universite_de_sherbrooke.pdf) et [2018](/auvsi_suas-2018-journals-universite_de_sherbrooke.pdf) pour comprendre de quoi il s'agit.
