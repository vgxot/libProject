<script setup>
import "@/assets/style/main.scss"
import AppFooter from "@/components/global/app-footer.vue";
import WhiteAppFooter from "@/components/global/white-app-footer.vue";
import { RouterView } from 'vue-router'
import AppHeader from "@/components/global/app-header.vue";
</script>

<template>
  <app-header></app-header>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <component :is="Component"/>
    </transition>
    <app-footer v-if="!route.meta.footer"></app-footer>
    <white-app-footer v-else-if="route.meta.whiteFooter"></white-app-footer>
  </router-view>
</template>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 500ms;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 150ms;
}
.fade-leave-to {
  opacity: 0;
}

.right-enter-from {
  opacity: 0;
  transform: translateX(150%);
}
.right-enter-active {
  transition: all 1s, transform 1s;
}
.right-enter-to {
  opacity: 1;
}
.right-leave-from {
  opacity: 1;
}
.right-leave-active {

}
.right-leave-to {
  opacity: 1;
}





</style>