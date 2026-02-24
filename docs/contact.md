# Contact

If you're interested in discussing systems integration,
automation, or remote collaboration, please reach out!

<form action="https://formspree.io/f/xqedwpvv" method="POST" class="contact-form">

  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>

  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required></textarea>
  </div>

  <div class="cf-turnstile"
       data-sitekey="0x4AAAAAAChjL3Wc5kWV0cXZ"
       data-theme="auto">
  </div>

  <button type="submit">Send Message</button>

</form>

<style>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  font-size: 0.9rem;
}

input,
textarea {
  padding: 0.7rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  font-size: 1rem;
  background: var(--vp-c-bg-soft);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand);
}

button {
  padding: 0.7rem 1rem;
  border-radius: 6px;
  border: none;
  background: var(--vp-c-brand);
  color: white;
  font-weight: 600;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>
