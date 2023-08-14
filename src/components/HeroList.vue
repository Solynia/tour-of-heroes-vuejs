<script setup lang="ts">
import { ref, watchEffect } from 'vue';

interface Hero {
  id?: number;
  name: string;
}
const heroes = ref<Hero[]>([])
watchEffect(async () => {
  const response = await fetch('http://localhost:5174/heroes');
  heroes.value = await response.json();
})
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
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #eee;
  margin: 0.5em;
  padding: 0.3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes li:hover {
  color: #607d8b;
  background-color: #ddd;
  left: 0.1em;
}
.heroes li.selected {
  background-color: #cfd8dc;
  color: white;
}
.heroes li.selected:hover {
  background-color: #bbd8dc;
  color: white;
}
.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}
.heroes a{
  color: inherit;
  text-decoration: inherit;
  cursor: auto;
}
</style>
