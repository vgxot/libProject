<script setup>
import AppButton from "@/components/UI/buttons/app-button.vue";
import router from "@/router";
import {onMounted, ref} from "vue";
import axios from "axios";
import $api, {apiUrl} from "@/http";

const username = ref('')
const password = ref('')

const emit = defineEmits(['change'])

function login() {
  $api.post(`/user/login`, {
    username: username.value,
    password: password.value
  })
    .then((response) => {
    if (response.status === 200) {
      localStorage.setItem('token', response.data);
      router.push({path: "/account"})
    } else if(response.status === 401) {
      console.log('эээ брат не кради аккаунты')
    }
  })
    .catch()

}
function changeAuth() {
  emit('change')
}
</script>

<template>
    <form @submit.prevent class="auth-input-block-flex">
      <p class="fs-42 white">Вход</p>
      <input autocomplete="nickname" class="form-input" placeholder="Никнейм" type="text" v-model="username">
      <input autocomplete="current-password" class="form-input" placeholder="Пароль" type="password" v-model="password">
      <div class="btn-block-side">
        <app-button @click="changeAuth">Уже есть аккаунт?</app-button>
        <app-button @click="login">Войти</app-button>
      </div>
    </form>
</template>

<style scoped>

</style>