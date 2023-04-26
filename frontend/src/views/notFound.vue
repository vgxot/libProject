<script setup>

import AppButton from "@/components/UI/buttons/app-button.vue";
</script>

<template>
  <div class="not-found">
    <p class="fs-72 white">404</p>
    <app-button class="bkgd-dark">
      <router-link to="/">На главную</router-link>
    </app-button>
  </div>
</template>

<style scoped>
.not-found {
  padding: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>