<script setup>
import AccountBase from "@/components/sections/account-base.vue";

let username = window.location.pathname.split('/')[2]

</script>

<template>
<account-base :username="username"></account-base>
</template>

<style>

</style>