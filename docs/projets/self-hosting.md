# Auto-hébergement

## Résumé

**Contexte** — Mon infrastructure auto-hébergée a commencé comme un passe-temps et est devenue, tranquillement, ce qui fait rouler mes entreprises, ma maison et ce site.

**Problème** — Je voulais des versions de qualité production de mon calendrier, CRM, ERP, notes, synchronisation de fichiers, finances et domotique, sans m'enfermer dans une pile de fournisseurs SaaS séparés que je ne pouvais ni contrôler ni faire parler ensemble, tout en payant des frais mensuels astronomiques.

**Mon rôle** — J'architecture et j'opère tout le stack seul, depuis le provisionnement du VPS et le serveur mandataire jusqu'à l'orchestration de services, les sauvegardes, la surveillance et les opérations au quotidien.

**Résultat** — Une seule infrastructure cohérente fait rouler l'ERP de Chocolat Infini, le calendrier de réservation de ce site, la domotique de la maison et de l'atelier, et une poignée d'utilitaires que j'utilise tous les jours.

**Stack** — Nginx Proxy Manager, Docker, Cloudflare, ERPNext, Cal.com, NextCloud, Home Assistant, n8n, Appflowy, ntfy.

## L'histoire complète

L'auto-hébergement est un passe-temps qui est né à la fois d'une nécessité et d'un intérêt. Je trouve une réelle satisfaction à pouvoir démarrer à peu près n'importe quel service dont j'ai besoin en quelques minutes.

En gros, l'auto-hébergement consiste à avoir un ordinateur de rechange ou un serveur privé virtuel (VPS) et à le configurer pour y faire tourner plusieurs services en même temps : site web, stockage dans le nuage, application de comptabilité, etc. Les concepts pour faire fonctionner tout ça sont _relativement_ simples.

---

Imaginez ça comme quelqu'un qui visite une banque. Les gens utilisent leur GPS (des résolveurs de noms de domaine comme [Cloudflare](https://www.cloudflare.com)) pour se rendre à la succursale la plus proche (le VPS), puis se présentent au comptoir d'accueil et disent à l'agent (un serveur mandataire comme [Nginx Proxy Manager](https://nginxproxymanager.com/)) ce qu'ils veulent faire aujourd'hui (en utilisant un domaine ou un sous-domaine comme `exemple.com` pour déposer de l'argent et `autre.exemple.com` pour en retirer). On les dirige ensuite vers le bon guichet (souvent un conteneur [Docker](https://www.docker.com)) sous le regard sévère de deux gros gardes du corps (la partie sécurité). Rendus au guichet, ils font ce qu'ils ont à faire avec le caissier (le service) avant de repartir.

Sur les projets à plus grande échelle, il y a même une couche supplémentaire par-dessus, où la banque dit au GPS d'envoyer les clients vers la succursale qui a le moins de monde, ou loin d'une autre qui est en rénovation (un système d'orchestration de conteneurs comme [Kubernetes](https://kubernetes.io/)), pour que tout roule quand des milliers de personnes doivent accéder à leur compte en même temps.

---

L'auto-hébergement et les logiciels libres vont de pair — après tout, le meilleur code est _généralement_ celui qui est maintenu par quelqu'un d'autre. Certains maintiennent même une liste d'[excellents logiciels auto-hébergés](https://github.com/awesome-selfhosted/awesome-selfhosted) pour à peu près n'importe quoi, de la prise de notes à la comptabilité, en passant par l'accumulation de données et la domotique.

Parmi les services que j'utilise tous les jours :
- [Nginx Proxy Manager](https://nginxproxymanager.com/) pour gérer les services
- [Wordpress](https://wordpress.org/) pour héberger chocolatinfini.com
- [NextCloud](https://nextcloud.com) pour sauvegarder et partager des fichiers
- [ERPNext](https://erpnext.com) pour l'ERP, le CRM et la fabrication
- [Cal.com](https://cal.com/) pour la prise de rendez-vous
- [Appflowy](https://appflowy.com/) pour la prise de notes
- [Actual](https://actualbudget.org/) pour les finances personnelles
- [n8n](https://n8n.io/) pour interconnecter les services
- [AFFiNE](https://affine.pro/) pour prendre des notes et faire du remue-méninges
- [Home Assistant](https://www.home-assistant.io/) pour faire rouler la chocolaterie et quelques lumières à la maison
- [ntfy](https://ntfy.sh/) pour rester au courant de comment ça va
