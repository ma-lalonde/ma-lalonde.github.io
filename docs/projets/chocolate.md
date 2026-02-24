# Chocolat Infini

## Résumé

**Contexte** — J'ai lancé Chocolat Infini à partir de zéro en 2024, après un voyage au Costa Rica et en Équateur, et je l'opère encore seul aujourd'hui.

**Problème** — Le chocolat bean-to-bar est traditionnellement un métier d'intuition, ce qui rend difficile de faire évoluer les recettes et de reproduire les mêmes résultats d'une batch à l'autre. Le chocolat de grande qualité est aussi rare et dispendieux.

**Mon rôle** — J'ai tout bâti moi-même : j'ai modifié chaque machine, conçu les contrôleurs de température en boucle fermée et les PCB qui les pilotent, puis développé l'intégration logicielle entre le site web, le processeur de paiement et ERPNext.

**Résultat** — J'ai remporté des médailles d'or au [Craft Chocolat Challenge 2025](https://www.craftchocolatchallenge.com/season-four) avec plusieurs barres. La ligne de production est complètement instrumentée, ce qui me permet d'atteindre le même profil de façon fiable d'une batch à l'autre.

**Stack** — Home Assistant, PCB 2 couches sur mesure, contrôle de température en boucle fermée, ERPNext, WordPress/WooCommerce.

## L'histoire complète

![chocolat-infini-home](/images/chocolat_infini_home.jpg)

Je fais présentement rouler Chocolat Infini, une chocolaterie bean-to-bar que j'ai démarrée à partir de zéro en 2024, après un voyage au Costa Rica et en Équateur.

C'est plus qu'une chocolaterie : c'est un laboratoire où je peux modifier les machines et optimiser le procédé de fabrication du chocolat.

Quelques-unes de mes barres ont remporté des médailles d'or au [Craft Chocolat Challenge 2025](https://www.craftchocolatchallenge.com/season-four).

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
