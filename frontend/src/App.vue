<script setup>
import "@/assets/style/main.scss"
import { RouterView } from 'vue-router'
import AppHeader from "@/components/global/app-header.vue";
import AppFooter from "@/components/global/app-footer.vue";
</script>

<template>
  <app-header></app-header>
  <router-view v-slot="{ Component }">
    <transition name="question">
      <component :is="Component" />
    </transition>
  </router-view>
  <app-footer></app-footer>
</template>
