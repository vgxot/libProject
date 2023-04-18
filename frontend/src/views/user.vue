<script setup>
import AccountBase from "@/components/sections/account-base.vue";
import $api from "@/http";
import {onMounted, ref} from "vue";

let userData = ref([])
let username = window.location.pathname.split('/')[2]

onMounted(function () {
/*  let url = window.location.pathname
  $api.get(`${url}`)
    .then((response) => {
      userData = response.data
      console.log(userData)
    })*/
})
</script>

<template>
<account-base :username="username" :userData="userData"></account-base>
</template>

<style>

</style>