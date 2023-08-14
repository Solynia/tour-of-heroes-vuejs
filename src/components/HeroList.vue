<script setup lang="ts">
import { ref } from 'vue';

interface Hero {
  id?: number;
  name: string;
}
const heroes = ref<Hero[]>([
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
])
</script>

<template>
  <div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <template v-for="hero in heroes" :key="hero.id">
        <RouterLink :to="`/heroes/detail/${hero.id}`">
          <li>
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </RouterLink>
      </template>
    </ul>
  </div>
</template>

<style scoped>
</style>
