<script setup lang="ts">
import { ref } from 'vue';
import NavMenuItem from './NavMenuItem.vue';

interface Item {
  label: string;
  route: string;
}

const items = ref<Item[]>([])
</script>

<template>
  <nav className="navbar">
    <ul className="navbar-nav">
      <NavMenuItem :label="'TOR'" :route="'/'" :logo="true"/>
      <template v-for="(item, index) in items" :key="index">
        <NavMenuItem :label="item.label" :route="item.route" />
      </template>
    </ul>
  </nav>
</template>

<style scoped>
</style>
