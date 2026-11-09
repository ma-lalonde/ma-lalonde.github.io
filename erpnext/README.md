# ERPNext side of the contact form

The contact form (`docs/.vitepress/theme/components/ContactForm.vue`) posts
to an ERPNext Server Script that checks the Cloudflare Turnstile token and
opens a Helpdesk ticket. The script source is [website_contact.py](website_contact.py).

## Setup

1. Enable server scripts: `bench set-config -g server_script_enabled 1`
2. Allow the site's origin:
   `bench --site <site> set-config allow_cors '["https://ma-lalonde.dev"]' --parse`
3. In ERPNext, create a Server Script:
   - Script Type: API
   - API Method: `website_contact`
   - Allow Guest: checked
   - Enable Rate Limit: checked (for example 5 calls per 3600 seconds)
   - Script: the content of `website_contact.py`, with the Turnstile secret
     key in place of `[TURNSTILE SECRET KEY]`
4. Set the form's `endpoint` default in `ContactForm.vue` to
   `https://<erpnext host>/api/method/website_contact`.
5. Optional: enable the acknowledgement email in HD Settings so the sender
   gets a confirmation.

## Check

Submit the form on the site: a ticket titled "Site web : <name>" appears in
Helpdesk with the message as its first reply.
