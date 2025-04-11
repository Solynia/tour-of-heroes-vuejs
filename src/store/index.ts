import type { Hero, HeroEntity } from '@/model/Hero'
import type { Notification } from '@/model/Notification'
import type { InjectionKey } from 'vue'
import { useStore as baseUseStore, createStore, Store } from 'vuex'

type HeroesState = {
  heroes: HeroEntity[]
}

type NotificationState = {
  notification?: Notification
}

type State = {
  heroes: HeroesState
  notifications: NotificationState
}

export const key: InjectionKey<Store<State>> = Symbol()

export const useStore = () => {
  return baseUseStore(key)
}

const store = createStore<State>({
  state: {
    heroes: {
      heroes: []
    },
    notifications: {}
  },
  getters: {
    getHeroById: (state) => (id: number) => state.heroes.heroes.find((h) => h.id === id)
  },
  mutations: {
    updatedHero: (state, hero: HeroEntity) => {
      const match = state.heroes.heroes.find((h) => h.id === hero.id)
      if (!match) return
      match.name = hero.name
    },
    fetchedHeroes: (state, heroes: HeroEntity[]) => {
      state.heroes.heroes = heroes
    },
    notificationAdded: (state, payload: Notification) => {
      state.notifications.notification = payload
    },
    notificationDismissed: (state) => {
      delete state.notifications.notification
    }
  },
  actions: {
    createHero: async ({ dispatch }, { name }: Hero) => {
      dispatch('displayNotification', { message: `Saving ${name}` })
      await fetch(`http://localhost:5174/heroes`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: new Date(Date.now()).getTime(), name })
      })
    },
    updateHero: async ({ commit, dispatch }, payload: HeroEntity) => {
      dispatch('displayNotification', { message: `Saving ${payload.name}` })
      const response = await fetch(`http://localhost:5174/heroes/${payload.id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if ([200, 201].includes(response.status)) {
        commit('updatedHero', payload)
      }
    },
    fetchHeroes: async ({ commit, dispatch }) => {
      dispatch('displayNotification', { message: `Fetching heroes` })
      try {
        const response = await fetch('http://localhost:5174/heroes')
        const heroes = (await response.json()) as { id: string; name: string }[]
        const payload = heroes.map<HeroEntity>((h) => ({ id: +h.id, name: h.name }))
        commit('fetchedHeroes', payload)
        dispatch('displayNotification', { message: `Heroes loaded` })
      } catch (error) {
        dispatch('displayNotification', { message: `Error loading heroes` })
      }
    },
    displayNotification: ({ commit }, payload: Notification) => {
      setTimeout(() => commit('notificationDismissed'), 5000)
      commit('notificationAdded', payload)
    }
  }
})

export default store
