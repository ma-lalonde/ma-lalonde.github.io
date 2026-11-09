<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    locale?: 'fr' | 'en'
    endpoint?: string
    turnstileSiteKey?: string
  }>(),
  {
    locale: 'en',
    endpoint: 'https://[ERPNEXT HOST]/api/method/website_contact',
    turnstileSiteKey: '0x4AAAAAAChjL3Wc5kWV0cXZ'
  }
)

const state = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

const strings = computed(() => {
  if (props.locale === 'fr') {
    return {
      name: 'Nom',
      email: 'Courriel',
      message: 'Message',
      submit: 'Envoyer',
      sending: 'Envoi...',
      sent: 'Merci, votre message est bien reçu. Je vous réponds sous peu.',
      error: "L'envoi a échoué. Réessayez dans un moment."
    }
  }
  return {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send message',
    sending: 'Sending...',
    sent: 'Thanks, your message was received. I will get back to you shortly.',
    error: 'Sending failed. Please try again in a moment.'
  }
})

async function submit(event: Event) {
  const form = event.target as HTMLFormElement
  state.value = 'sending'
  try {
    // URL-encoded body keeps this a simple CORS request (no preflight)
    const response = await fetch(props.endpoint, {
      method: 'POST',
      body: new URLSearchParams(new FormData(form) as any)
    })
    if (!response.ok) throw new Error(String(response.status))
    form.reset()
    state.value = 'sent'
  } catch {
    state.value = 'error'
  } finally {
    // a Turnstile token is single-use
    ;(window as any).turnstile?.reset()
  }
}
</script>

<template>
  <form class="contact-form" @submit.prevent="submit">
    <div class="contact-form__group">
      <label for="name">{{ strings.name }}</label>
      <input type="text" id="name" name="name" maxlength="140" required />
    </div>

    <div class="contact-form__group">
      <label for="email">{{ strings.email }}</label>
      <input type="email" id="email" name="email" maxlength="140" required />
    </div>

    <div class="contact-form__group">
      <label for="message">{{ strings.message }}</label>
      <textarea id="message" name="message" rows="6" maxlength="5000" required></textarea>
    </div>

    <div
      class="cf-turnstile"
      :data-sitekey="turnstileSiteKey"
      data-theme="auto"
    ></div>

    <button type="submit" :disabled="state === 'sending'">
      {{ state === 'sending' ? strings.sending : strings.submit }}
    </button>

    <p v-if="state === 'sent'" class="contact-form__status" role="status">{{ strings.sent }}</p>
    <p v-if="state === 'error'" class="contact-form__status contact-form__status--error" role="alert">
      {{ strings.error }}
    </p>
  </form>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
}

.contact-form__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-form label {
  font-weight: 600;
  font-size: 0.9rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.7rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  font-size: 1rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-family: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.contact-form button {
  padding: 0.7rem 1rem;
  border-radius: 6px;
  border: none;
  background: var(--vp-c-brand-1);
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
}

.contact-form button:hover {
  opacity: 0.9;
}

.contact-form button:disabled {
  opacity: 0.6;
  cursor: wait;
}

.contact-form__status {
  margin: 0;
}

.contact-form__status--error {
  color: var(--vp-c-danger-1);
}
</style>
