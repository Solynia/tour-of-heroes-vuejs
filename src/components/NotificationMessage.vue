<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
const notification = computed(() => store.state.notifications.notification)
const dismiss = () => store.commit('notificationDismissed')
</script>

<template>
  <div className="message" @click="dismiss">
    {{ notification?.message }}
  </div>
</template>

<style scoped>
.message {
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  color: white;
  background: var(--bg-primary);
  filter: grayscale(100%) opacity(0.7);
}

.message:hover {
  filter: grayscale(0%) opacity(1);
  transition: var(--transition-speed);
}
</style>
