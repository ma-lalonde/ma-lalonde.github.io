<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <section v-if="frontmatter.proof" class="proof">
    <ul class="proof-list">
      <li v-for="item in frontmatter.proof" :key="item.figure" class="proof-item">
        <span class="proof-figure">{{ item.figure }}</span>
        <span class="proof-label">{{ item.label }}</span>
        <span class="proof-detail">{{ item.detail }}</span>
      </li>
    </ul>
    <p v-if="frontmatter.proofSource" class="proof-note">{{ frontmatter.proofSource }}</p>
    <p v-if="frontmatter.proofNote" class="proof-note">{{ frontmatter.proofNote }}</p>
  </section>
</template>

<style scoped>
.proof {
  max-width: 1152px;
  margin: 0 auto;
  padding: 8px 24px 32px;
  text-align: center;
}

.proof-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 768px) {
  .proof-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

.proof-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.proof-figure {
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.proof-label {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.proof-detail {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.proof-note {
  margin: 16px 0 0;
  color: var(--vp-c-text-2);
}
</style>
