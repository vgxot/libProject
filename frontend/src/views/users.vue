<script setup>
import Search from "@/components/sections/search.vue";
const page = 'users'

</script>

<template>
  <div class="users">
    <search :data="page">
    </search>
  </div>
</template>

<style lang="scss" scoped>

</style>