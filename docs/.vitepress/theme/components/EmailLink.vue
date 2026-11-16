<script setup lang="ts">
import { onMounted, ref } from 'vue'

// The address is put together in the browser, so the page's HTML never holds
// it whole for address harvesters to find.
const props = defineProps<{ user: string; domain: string }>()
const address = ref('')

onMounted(() => {
  address.value = props.user + '@' + props.domain
})
</script>

<template>
  <a v-if="address" :href="'mailto:' + address">{{ address }}</a>
</template>
