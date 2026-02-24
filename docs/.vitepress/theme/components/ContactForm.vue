<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    locale?: 'fr' | 'en'
    action?: string
    turnstileSiteKey?: string
  }>(),
  {
    locale: 'en',
    action: 'https://formspree.io/f/xqedwpvv',
    turnstileSiteKey: '0x4AAAAAAChjL3Wc5kWV0cXZ'
  }
)

const strings = computed(() => {
  if (props.locale === 'fr') {
    return {
      name: 'Nom',
      email: 'Courriel',
      message: 'Message',
      submit: 'Envoyer'
    }
  }
  return {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send message'
  }
})
</script>

<template>
  <form :action="action" method="POST" class="contact-form">
    <input type="hidden" name="_language" :value="locale" />

    <div class="contact-form__group">
      <label for="name">{{ strings.name }}</label>
      <input type="text" id="name" name="name" required />
    </div>

    <div class="contact-form__group">
      <label for="email">{{ strings.email }}</label>
      <input type="email" id="email" name="email" required />
    </div>

    <div class="contact-form__group">
      <label for="message">{{ strings.message }}</label>
      <textarea id="message" name="message" rows="6" required></textarea>
    </div>

    <div
      class="cf-turnstile"
      :data-sitekey="turnstileSiteKey"
      data-theme="auto"
    ></div>

    <button type="submit">{{ strings.submit }}</button>
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
</style>
