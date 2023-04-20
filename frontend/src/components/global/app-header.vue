<script setup>
import {ref} from "vue";

const open = ref(false)
</script>

<template>
  <div id="appheader" class="app-header">
    <div class="header-desktop">
      <router-link class="header-link" to="/">Главная</router-link>
      <router-link class="header-link" to="/books">Каталог</router-link>
      <router-link class="header-link" to="/users">Форум</router-link>
      <router-link class="header-link" to="/news">Новости</router-link>
      <router-link class="header-link" to="/account">Аккаунт</router-link>
    </div>
    <div class="header-mobile" :class="{hide: open}">
      <button class="header-mobile-link" name="button to open mobile menu" @click="open = !open">
          <div class="open-menu-block" :class="{close: open}">
            <svg class="open-menu--top" :class="{close: open}" width="24" height="2" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.283333 1.71667C0.472222 1.90556 0.711111 2 1 2H23C23.2889 2 23.5278 1.90556 23.7167 1.71667C23.9056 1.52778 24 1.28889 24 1C24 0.711111 23.9056 0.472222 23.7167 0.283333C23.5278 0.0944446 23.2889 0 23 0H1C0.711111 0 0.472222 0.0944446 0.283333 0.283333C0.0944446 0.472222 0 0.711111 0 1C0 1.28889 0.0944446 1.52778 0.283333 1.71667Z" fill="white"/>
            </svg>
            <svg class="open-menu--bottom" :class="{close: open}" width="24" height="2" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.283333 1.71667C0.472222 1.90556 0.711111 2 1 2H23C23.2889 2 23.5278 1.90556 23.7167 1.71667C23.9056 1.52778 24 1.28889 24 1C24 0.711111 23.9056 0.472222 23.7167 0.283333C23.5278 0.0944446 23.2889 0 23 0H1C0.711111 0 0.472222 0.0944446 0.283333 0.283333C0.0944446 0.472222 0 0.711111 0 1C0 1.28889 0.0944446 1.52778 0.283333 1.71667Z" fill="white"/>
            </svg>
          </div>
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
.header-desktop {
  position: fixed;
  width: 100%;
  background-color: #00000075;
  z-index: 3;
  backdrop-filter: blur(10px);
  height: 60px;
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
  font-size: 24px;
  margin: auto 10px;
  transition: 150ms ease-in;
}
.header-link:hover {
  transition: 150ms ease-in;
  color: #b5b5b5;
}
.header-mobile-link {
  margin: auto 35px;
  display: flex;
}
.link-img {
  width: 42px;
}
.open-menu-block {
  width: 42px;
  height: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
.open-menu-block.close {
}
.open-menu--top, .open-menu--bottom {
  transition: all 750ms cubic-bezier(0, 1, .15, 1);
}
.open-menu--top.close {
  transform: rotate(45deg) translateY(8px) ;
  transition: all 750ms cubic-bezier(0, 1, .15, 1);
}
.open-menu--bottom.close {
  transform: rotate(-45deg) translateY(-9px);
  transition: all 750ms cubic-bezier(0, 1, .15, 1);
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