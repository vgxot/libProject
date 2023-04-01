<script setup>
import {ref} from "vue";

const open = ref(false)
</script>

<template>
  <div class="app-header">
    <div class="header-desktop">
      <router-link class="header-link" to="/">Главная</router-link>
      <router-link class="header-link" to="/books">Каталог</router-link>
      <router-link class="header-link" to="/users">Форум</router-link>
      <router-link class="header-link" to="/news">Новости</router-link>
      <router-link class="header-link" to="/auth">Аккаунт</router-link>
    </div>
    <div class="header-mobile" :class="{hide: open}">
      <button class="header-mobile-link" name="button to open mobile menu" @click="open = !open">
        <img class="link-img" src="@/assets/buttons/menu-open.svg" alt="">
      </button>
      <router-link class="header-mobile-link" to="/" aria-label="main">
        <img class="link-img"  src="@/assets/buttons/library-mini-logo-white.svg" alt="">
      </router-link>
      <router-link class="header-mobile-link" to="/auth" aria-label="account">
        <img class="link-img" src="@/assets/buttons/account.svg" alt="">
      </router-link>
    </div>
    <transition name="menu-block">
      <div class="header-mobile-menu" v-if="open">
        <router-link class="header-link" @click="open =!open" to="/">Главная</router-link>
        <router-link class="header-link" @click="open =!open" to="/books">Каталог</router-link>
        <router-link class="header-link" @click="open =!open" to="/users">Форум</router-link>
        <router-link class="header-link" @click="open =!open" to="/news">Новости</router-link>
        <router-link class="header-link" @click="open =!open" to="/auth">Аккаунт</router-link>
      </div>
    </transition>
  </div>
</template>
<style scoped>
.app-header {

}
.header-desktop {
  position: fixed;
  width: 100%;
  background-color: #00000075;
  z-index: 3;
  backdrop-filter: blur(10px);
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
}
.header-mobile {
  display: none;
  position: fixed;
  width: 100%;
  background-color: #00000075;
  backdrop-filter: blur(10px);
  height: 70px;
  z-index: 3;
}
.header-link {
  color: white;
  font-size: 28px;
  margin: auto 10px;
  transition: 150ms ease-in;
}
.header-link:hover {
  transition: 150ms ease-in;
  color: #b5b5b5;
}
.header-mobile-link {
  margin: auto 35px;
  height: 42px;
}
.link-img {
  width: 42px;
}
.header-mobile-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 2;
}
.menu-block-enter-active {
  transition: all 750ms cubic-bezier(0, 1, .15, 1);
}
.menu-block-leave-active {
  transition: all 400ms ease-out;
}
.menu-block-enter-from,
.menu-block-leave-to {
  opacity: 0;
  transform: translateY(-150%);
}
.hide {
  backdrop-filter: none;
  background-color: unset;
  transition: all 150ms ease-in-out;
}
@media only screen and (max-width: 734px) {
  .header-desktop {
    display: none;
  }
  .header-mobile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .header-link {
    margin: 15px 0;
    font-size: 42px;
  }
}
</style>