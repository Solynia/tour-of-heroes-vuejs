<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue';
import NotificationMessage from './components/NotificationMessage.vue'
</script>

<template>
  <NavMenu />
  <main>
    <h1>Tour of heroes</h1>
    <RouterView />
  </main>
  <NotificationMessage />
</template>

<style scoped>
main {
  margin-left: var(--navbar-thichness);
  padding: 1rem;
}
/* Small screens */
@media only screen and (max-width: 600px) {
  main {
    margin: 0;
  }
}
</style>
