<script setup lang="ts">
import type { Hero } from '@/model/Hero';
import { computed, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const hero = ref<Hero>({ id: new Date(Date.now()).getTime(), name: '' })
const input = ref<string>('')
const formInvalid = computed(() => !input.value || input.value === hero.value.name)

const redirectToList = () => router.push({ path: '/heroes/list' });
const onSubmit = async () => {
  if (formInvalid.value) return;

  const response = await fetch(
     `http://localhost:5174/heroes/${route.params.id ? route.params.id : ''}`,
    {
      method: route.params.id ? 'put' : 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: hero.value.id, name: input.value })
    }
  );
  if ([200, 201].includes(response.status)) {
    redirectToList();
  }
}


watchEffect(async () => {
  if (!route.params.id) return

  const response = await fetch(`http://localhost:5174/heroes/${route.params.id}`);
  if (response.status == 200) {
    hero.value = await response.json();
    input.value = hero.value!.name;
  }
})
</script>

<template>
  <form v-if="hero" @submit.prevent="onSubmit">
    <h2>{{input.toUpperCase()}} Details</h2>
    <div>
      <span>id: </span>
      {{hero.id}}
    </div>
    <div>
      <label>name: </label>
      <input type="text" name="name" placeholder="name" v-model="input" />
    </div>
    <input type="submit" value="Save" :disabled="formInvalid" />
    <input type="button" value="Cancel" @click="redirectToList" />
  </form>
  <h2 v-else>No content to display</h2>
</template>

<style scoped>
</style>
