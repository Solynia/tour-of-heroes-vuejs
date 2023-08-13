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
.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
}

.nav-item {
  width: 100%;
}

.nav-item:last-child {
  margin-top: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  height: var(--navbar-thichness);
  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: var(--bg-secondary);
  color: var(--text-secondary);
}

.logo-text {
  display: inline;
  position: absolute;
  left: -999px;
  transition: var(--transition-speed);
}

.link-text {
  display: none;
  margin-left: 1rem;
}

/* Small screens */
@media only screen and (max-width: 600px) {
  .logo {
    display: none;
  }

  .nav-link {
    justify-content: center;
  }
}
</style>
