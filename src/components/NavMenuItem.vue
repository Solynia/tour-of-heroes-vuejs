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
    <slot v-if="!logo"></slot>
    <span :class="`link-text${logo ? ' logo-text' : ''}`">
      {{label}}
    </span>
    <slot v-if="logo"></slot>
  </RouterLink>
</li>
</template>

<style>
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

.logo svg {
  transform: rotate(0deg);
  transition: var(--transition-speed);
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

.nav-link svg {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}

.fa-primary {
  color: #ff7eee;
}

.fa-secondary {
  color: #df49a6;
}

.fa-primary,
.fa-secondary {
  transition: var(--transition-speed);
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
