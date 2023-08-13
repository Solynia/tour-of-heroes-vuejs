<script setup lang="ts">
defineProps<{
  label: string;
  route: string;
  logo?: boolean;
}>()
</script>

<template>
<li :class="logo ? 'logo' : 'nav-item'">
  <RouterLink :to="route" class="nav-link">
    <span :class="`link-text${logo ? ' logo-text' : ''}`">
      {{label}}
    </span>
  </RouterLink>
</li>
</template>

<style scoped>
</style>
