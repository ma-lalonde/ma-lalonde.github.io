# ERPNext Server Script (type API, method "website_contact", Allow Guest).
# Turns a contact-form submission from ma-lalonde.dev or catena.run into a
# Helpdesk ticket assigned to AGENT, titled with the site the form was sent from.

TURNSTILE_SECRET = "[TURNSTILE SECRET KEY]"
AGENT = "marc@ma-lalonde.dev"

form = frappe.form_dict
name = (form.get("name") or "").strip()[:140]
email = (form.get("email") or "").strip()[:140]
company = (form.get("company") or "").strip()[:140]
intent = (form.get("intent") or "").strip()[:500]
message = (form.get("message") or "").strip()[:5000]
token = form.get("cf-turnstile-response") or ""

if not (name and email and message and token):
    frappe.throw("Missing fields")

check = frappe.make_post_request(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    data={"secret": TURNSTILE_SECRET, "response": token},
)
if not check or not check.get("success"):
    frappe.throw("Verification failed")

# Turnstile reports the hostname the widget was solved on.
site = check.get("hostname") or "site web"

lines = []
if company:
    lines.append("Company: " + company)
if intent:
    lines.append("Looking for: " + intent)
if lines:
    lines.append("")
lines.append(message)
html = frappe.utils.escape_html("\n".join(lines)).replace("\n", "<br>")

# Inserted without a description: Helpdesk would otherwise log the first
# message with the session user ("Guest") as sender, which is not an email.
ticket = frappe.get_doc({
    "doctype": "HD Ticket",
    "subject": site + " : " + name,
    "raised_by": email,
})
ticket.insert(ignore_permissions=True)

frappe.get_doc({
    "doctype": "Communication",
    "communication_type": "Communication",
    "communication_medium": "Email",
    "sent_or_received": "Received",
    "email_status": "Open",
    "status": "Linked",
    "subject": ticket.subject,
    "sender": email,
    "sender_full_name": name,
    "content": html,
    "reference_doctype": "HD Ticket",
    "reference_name": ticket.name,
}).insert(ignore_permissions=True)

ticket.db_set("description", html)

# A ToDo is what an assignment is; frappe.desk.form.assign_to checks the
# session user's read access, which Guest lacks.
frappe.get_doc({
    "doctype": "ToDo",
    "allocated_to": AGENT,
    "reference_type": "HD Ticket",
    "reference_name": ticket.name,
    "description": ticket.subject,
}).insert(ignore_permissions=True)

frappe.response["message"] = "ok"
