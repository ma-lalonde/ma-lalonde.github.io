---
description: "Chocolat Infini, ma PME de fabrication (2024-2026) : boutique, paiements, comptabilité et inventaire synchronisés, torréfaction et tempérage automatisés, des heures récupérées chaque semaine."
---

# Chocolat Infini (2024-2026)

## Résumé

**Contexte** - J'ai fondé et fait rouler seul une PME de fabrication alimentaire (2024-2026) : production, boutique en ligne, comptabilité, inventaire.

**Problème** - Trois sources de temps perdu. Entre la boutique en ligne, les paiements et la comptabilité, les mêmes données se ressaisissaient à la main. La torréfaction se surveillait à la main. Des lots de chocolat mal tempérés étaient à refaire.

**Ce que j'ai fait** - J'ai synchronisé la boutique en ligne (WooCommerce), les paiements, la comptabilité et l'inventaire (ERPNext). J'ai automatisé la torréfaction en boucle fermée. J'ai ajouté un contrôle de température aux machines de tempérage.

**Résultat** -

- Boutique, paiements, comptabilité et inventaire synchronisés : au moins 1 heure par semaine récupérée, et une tâche pénible en moins.
- Torréfaction automatisée en boucle fermée : 3 à 5 heures par semaine récupérées, et une qualité plus constante.
- Contrôle de température des machines de tempérage : des heures par semaine de lots refaits éliminées, et une meilleure qualité.
- Médailles d'or au [Craft Chocolat Challenge 2025](https://www.craftchocolatchallenge.com/season-four).

**Outils** - Home Assistant, PCB 2 couches sur mesure, contrôle de température en boucle fermée, ERPNext, WordPress/WooCommerce.

## L'histoire complète

![chocolat-infini-home](/images/chocolat_infini_home.jpg)

J'ai lancé Chocolat Infini à partir de zéro en 2024, après un voyage au Costa Rica et en Équateur, et je l'ai opéré seul jusqu'en 2026. C'était une chocolaterie bean-to-bar, un métier traditionnellement d'intuition, où il est difficile de faire évoluer les recettes et de reproduire les mêmes résultats d'un lot à l'autre. C'était aussi un laboratoire où je pouvais modifier les machines et optimiser le procédé de fabrication.

Quelques-unes de mes barres ont remporté des médailles d'or au [Craft Chocolat Challenge 2025](https://www.craftchocolatchallenge.com/season-four).

J'ai tout bâti moi-même : j'ai modifié chaque machine, conçu les contrôleurs de température en boucle fermée et les PCB qui les pilotent, puis développé l'intégration logicielle entre le site web, le processeur de paiement et ERPNext.

Une des particularités les plus originales de cette petite opération, c'était que _chaque machine_ était modifiée et contrôlée à distance par un tableau de bord Home Assistant clair. Ça amenait une rigueur industrielle à un métier traditionnellement artisanal, et ça m'a permis d'améliorer rapidement les recettes.

![ha-dashboard](/images/ha_dashboard.png)

Parmi les projets techniques liés au chocolat sur lesquels j'ai travaillé pour faire grossir l'entreprise :
- Un petit torréfacteur électrique à tambour Behmor en boucle fermée, qui torréfiait les fèves de cacao parfaitement, peu importe la météo.

![roasting-curve](/images/roasting_curve.png)

- Des contrôleurs de température en boucle fermée pour chaque machine, incluant les mélangeurs à pierre qui broient les grués de cacao et le sucre en masse de chocolat, et les machines de tempérage qui font cristalliser le chocolat en une barre brun foncé, brillante et savoureuse. Un simple PCB deux couches peut être un outil très rentable.

![chocolate-controller](/images/chocolate_controller.jpg)

- L'emballage, que j'imprimais et découpais à l'atelier avec une découpeuse à matrice.
- Une intégration logicielle complète entre le site web, le processeur de paiement et le logiciel de comptabilité/inventaire (ERPNext), ce qui sauvait beaucoup de temps à l'impôt ou quand vient le temps de commander de nouveaux ingrédients.

Visitez le site officiel pour tout savoir sur le chocolat : [chocolatinfini.com](https://chocolatinfini.com).
