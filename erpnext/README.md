# ERPNext side of the contact form

The contact forms of ma-lalonde.dev (`docs/.vitepress/theme/components/ContactForm.vue`)
and catena.run (`website/src/components/ContactForm.astro`) post to an ERPNext
Server Script on `desk.ma-lalonde.dev`. The script checks the Cloudflare
Turnstile token, opens a Helpdesk ticket and assigns it to the agent named in
`AGENT`. The script source is [website_contact.py](website_contact.py).

## Setup

1. Enable server scripts: `bench set-config -g server_script_enabled 1`
2. Allow both sites' origins:
   `bench --site <site> set-config allow_cors '["https://ma-lalonde.dev", "https://catena.run"]' --parse`
3. In ERPNext, create a Server Script:
   - Script Type: API
   - API Method: `website_contact`
   - Allow Guest: checked
   - Enable Rate Limit: checked (for example 5 calls per 3600 seconds)
   - Script: the content of `website_contact.py`, with the Turnstile secret
     key in place of `[TURNSTILE SECRET KEY]`
4. In Cloudflare Turnstile, list `ma-lalonde.dev` and `catena.run` as the
   widget's hostnames.
5. Optional: enable the acknowledgement email in HD Settings so the sender
   gets a confirmation.

## Check

Submit the form on each site: a ticket titled "<site hostname> : <name>",
assigned to `AGENT`, appears in Helpdesk with the message as its first reply.
