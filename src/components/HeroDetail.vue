<script setup lang="ts">
import type { Hero, HeroEntity } from '@/model/Hero'
import { useStore } from '@/store'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const store = useStore()

const hero = ref<Hero>({ name: '' })
const input = ref<string>(hero.value.name)
const formInvalid = computed(() => !input.value || input.value === hero.value.name)

const redirectToList = () => router.push({ path: '/heroes/list' });
const onSubmit = async () => {
  if (formInvalid.value) return;

  await store.dispatch(route.params.id ? 'updateHero' : 'createHero', {
    id: hero.value.id,
    name: input.value
  })

  redirectToList();
}

if (route.params.id) {
  const selectedHero = computed(
    () => store.getters.getHeroById(+route.params.id) as HeroEntity | undefined
  )
  if (selectedHero.value !== undefined) {
    hero.value = selectedHero.value
    input.value = hero.value!.name
  }
}
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
