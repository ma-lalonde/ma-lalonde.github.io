# Catena

## Résumé

**Contexte** - Je construis et j'opère ce genre de système depuis 2013, et je fais rouler mes propres entreprises sur de l'infrastructure auto-hébergée depuis 2021. Catena, c'est cette expérience transformée en produit.

**Problème** - Les PME veulent sortir des logiciels facturés par employé. Presque aucune ne peut opérer l'alternative. Installer les logiciels, c'est la partie facile. Ce qui coule l'auto-hébergement dans une entreprise de quinze personnes, c'est la sauvegarde que personne n'a vérifiée, la mise à jour que personne n'ose appliquer et le compte que personne ne peut révoquer.

**Mon rôle** - Seul architecte et développeur. Conception du produit, installateur, interface d'administration, sauvegarde et restauration, documentation bilingue, et le banc de test automatisé qui prouve que tout fonctionne encore après chaque changement.

**Résultat** - Un serveur vierge devient une suite d'applications d'affaires en marche, avec authentification, sauvegardes, surveillance et restauration intégrées dès le départ plutôt qu'ajoutées après coup. Chaque affirmation sur le site du produit remonte à un scénario automatisé qui a roulé et qui a passé. C'est la compilation qui applique cette règle, pas la bonne volonté.

**Stack** - Ansible, Docker Swarm, Traefik, Keycloak avec oauth2-proxy, Portainer, PostgreSQL, restic vers S3 avec verrouillage d'objets, Tailscale, tunnel Cloudflare, un panneau d'administration en Go, et plus de 20 applications sélectionnées couvrant ERP, CRM, clavardage, documents, facturation, prise de rendez-vous et automatisation de flux de travail.

## L'histoire complète

Tout ce que ce site dit sur les exigences écrites et les plans de test est appliqué à Catena, en public.

Chaque fonctionnalité est déclarée dans un registre qui la relie aux fichiers qui l'implémentent et aux scénarios qui la vérifient. Une fonctionnalité sans test fait échouer la compilation. Le banc de test provisionne de vraies machines, installe le produit, le brise délibérément et le restaure. Les restaurations de sauvegarde sont exercées. Le déménagement d'un client d'un serveur à un autre est exercé. Les cas négatifs sont testés, pas seulement le chemin heureux.

Le volet conformité est bâti de la même façon. Les sauvegardes aboutissent sur du stockage qui appartient au client, sous une forme qui ne peut être ni altérée ni supprimée en silence. Qui peut accéder à quoi se gère à un seul endroit et se révoque à un seul endroit. Ce qui s'est passé peut être reconstitué après coup. C'est la moitié technique de ce que la loi québécoise sur les renseignements personnels demande; l'autre moitié, c'est de la procédure, et elle est écrite elle aussi.

Deux morceaux sont volontairement publics sur GitHub : l'installateur et le catalogue d'applications. N'importe qui peut lire ce qui va rouler sur son serveur avant que ça roule.

Plus de détails sur [catena.run](https://catena.run).
