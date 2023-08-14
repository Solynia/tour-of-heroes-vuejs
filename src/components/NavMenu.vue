<script setup lang="ts">
import { type Component, ref } from 'vue';
import NavMenuItem from './NavMenuItem.vue';
import CatsLogo from './icons/CatsLogo.vue'
import MenuLogo from './icons/MenuLogo.vue'
import ShuttleLogo from './icons/ShuttleLogo.vue'
import ThemifyLogo from './icons/ThemifyLogo.vue'

interface Item {
  label: string;
  route: string;
  icon: Component;
}

const items = ref<Item[]>([
  {
    label: "List", //Cats
    route: "/heroes/list",
    icon: CatsLogo
  },
  {
    label: "Home", //Shuttle
    route: "/",
    icon: ShuttleLogo
  },
  {
    label: "Home", //Themify
    route: "/",
    icon: ThemifyLogo
  }
])
</script>

<template>
  <nav className="navbar">
    <ul className="navbar-nav">
      <NavMenuItem :label="'TOR'" :route="'/'" :logo="true">
        <MenuLogo />
      </NavMenuItem>
      <template v-for="(item, index) in items" :key="index">
        <NavMenuItem :label="item.label" :route="item.route">
          <component :is="item.icon" />
        </NavMenuItem>
      </template>
    </ul>
  </nav>
</template>

<style>
.navbar {
  position: fixed;
  background: var(--bg-primary);
  transition: width var(--transition-speed) ease;
  z-index: 1;
}

.navbar:hover .logo svg {
  transform: rotate(-180deg);
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

/* Small screens */
@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: var(--navbar-thichness);
  }

  .navbar-nav {
    flex-direction: row;
  }
}
/* Large screens */
@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: var(--navbar-thichness);
    height: 100vh;
  }

  .navbar:hover {
    width: 16rem;
  }
  .navbar:hover .link-text {
    display: inline;
  }
  .navbar:hover .logo svg {
    margin-left: 11rem;
  }
  .navbar:hover .logo-text {
    left: 0px;
  }
}
</style>
