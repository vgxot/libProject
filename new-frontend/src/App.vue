<script setup>
import { RouterView } from 'vue-router'
import AppHeader from "@/components/sections/app-header.vue";
</script>

<template>
  <app-header></app-header>
  <router-view v-slot="{ Component }">
    <transition name="question">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
