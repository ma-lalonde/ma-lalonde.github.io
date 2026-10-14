# Catena

## Summary

**Context** - I have been developing applications since 2013 and running my own businesses on self-hosted infrastructure since 2021. Catena is that experience turned into a product.

**Problem** - Small businesses want out of per-seat software. Almost none can operate the alternative. Installing the applications is the easy part. What sinks self-hosting for a fifteen-person company is the backup nobody verified, the update nobody dares apply, and the credential nobody knows how to revoke.

**My role** - Sole architect and engineer. Product design, the installer, the admin interface, backup and restore, the bilingual documentation, and the automated test bench that proves it all still works after every change.

**Outcome** - A bare server becomes a running suite of business applications, with sign-in, backups, monitoring and restore built in from the start rather than bolted on afterward. Every claim on the product site traces back to an automated scenario that ran and passed. That rule is enforced by the build, not by good intentions.

**Stack** - Ansible, Docker Swarm, Traefik, Keycloak with oauth2-proxy, Portainer, PostgreSQL, restic to S3 with Object Lock, Tailscale, Cloudflared, a Go admin panel, GitHub CI/CD, and 20+ curated applications covering ERP, CRM, chat, documents, invoicing, scheduling and workflow automation.

## The long story

Everything this site says about written requirements and test plans is applied to Catena, in public.

Each feature is declared in a registry that maps it to the files that implement it and the scenarios that verify it. A feature with no test fails the build. The test bench provisions real machines, installs the product, breaks it deliberately and restores it. Backup restores are drilled. Moving a client from one server to another is drilled. The negative cases are tested, not just the easy path where nothing gets in the way.

The compliance side is built the same way. Backups land on storage the client owns, in a form that cannot be silently altered or deleted. Who can reach what is managed in one place and revoked in one place. Administrative actions are logged, and what happened can be reconstructed after the fact. That is the technical half of what Quebec's personal information law asks for; the other half is procedure, and it is written down too.

Two pieces are deliberately public on GitHub: the installer and the application catalog. Anyone can read what will run on their server before it runs.

More at [catena.run](https://catena.run).
