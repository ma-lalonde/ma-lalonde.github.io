<template>
  <div class="NotFound">
    <p class="code">404</p>

    <h1 class="title fr">Page introuvable</h1>
    <h1 class="title en">Page not found</h1>

    <div class="divider" />

    <blockquote class="quote">
      <p class="fr">La page demandée n'existe pas, a été déplacée ou n'est pas disponible.</p>
      <p class="en">The page you're looking for doesn't exist, has been moved, or isn't available.</p>
    </blockquote>

    <div class="action">
      <a class="link" href="/" aria-label="Retour à l'accueil / Back home">
        <span class="fr">Retour à l'accueil</span>
        <span class="sep">·</span>
        <span class="en">Back home</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 24px;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.title.en {
  padding-top: 4px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 32rem;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  border: none;
  padding: 0;
}

.quote p {
  margin: 0 0 8px;
}

.quote p.en {
  opacity: 0.75;
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: border-color 0.25s, color 0.25s;
}

.link:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
}

.sep {
  margin: 0 0.5em;
  opacity: 0.6;
}
</style>
