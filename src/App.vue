<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue';
</script>

<template>
  <NavMenu />
  <main>
    <h1>Tour of heroes</h1>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
