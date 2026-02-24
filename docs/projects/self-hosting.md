# Self Hosting

Self hosting is a hobby of mine that came to be out of both necessity and interest. I simply find great satisfaction in being able to spin up just about any service I need in a matter of minutes.

In short, self hosting involves having a spare computer or renting a Virtual Private Server (VPS) and setting it up so that multiple services can run from it at once, like a website, a cloud storage, an accounting app, etc. The concepts required to make it work are _relatively_ simple.

---

Think of it like someone visiting a bank. People will use their GPS (domain name resolvers like [Cloudflare](https://www.cloudflare.com)) to reach the nearest branch (VPS), then come to the front desk and tell the attendant (a reverse proxy service such as [Nginx Proxy Manager](https://nginxproxymanager.com/)) what they want to do today (using a domain or subdomain like `example.com` to deposit money and `other.example.com` to retrieve money). They will then be directed to the correct booth (often a [Docker](https://www.docker.com) container) under the stern gaze of two huge bodyguards (that's the security part). Once at the booth , they will do whatever they need to do with the clerk (the service) before leaving.

On larger scale projects, there is even another layer on top, where the bank tells the GPS app to direct people to whichever branch has the fewest people or away from one that's under renovation (a container orchestration system such as [Kubernetes](https://kubernetes.io/)) so that things run smoothly when thousands of people need to access their bank account at once.

---

Self hosting and open source software go hand in hand; after all, the best code is _usually_ the one that's maintained by someone else. Some people even maintain a list of [awesome self-hosted software](https://github.com/awesome-selfhosted/awesome-selfhosted) for just about anything from note-taking to accounting to data hoarding to home automation.

Some of the services I use every day include:
- [Nginx Proxy Manager](https://nginxproxymanager.com/) to manage the services
- [Wordpress](https://wordpress.org/) to host chocolatinfini.com
- [NextCloud](https://nextcloud.com) to backup and share files
- [ERPNext](https://erpnext.com) for ERP, CRM and manufacturing
- [Actual](https://actualbudget.org/) for personal finances
- [n8n](https://n8n.io/) to glue services together
- [AFFiNE](https://affine.pro/) to take notes and brainstorm
- [Home Assistant](https://www.home-assistant.io/) to run the chocolate factory and a few lights in the house
- [ntfy](https://ntfy.sh/) to stay updated on how things are going