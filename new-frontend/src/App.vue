<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="question">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
