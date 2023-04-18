<script setup>
  import {ref} from "vue";
  import AppButton from "@/components/UI/buttons/app-button.vue";
  import axios from "axios";

  const name = ref('')
  const username = ref('')
  const password = ref('')
  const emit = defineEmits(['change'])
  function register() {
    if (name.value !== '' && username.value !== '' && password.value !== '') {
      axios
        .post(`http://127.0.0.1:3000/api/user`, {
          name: name.value,
          username: username.value,
          password: password.value
        }).then((response) => {
        console.log(response.data)
      }).catch((reason) => {
        console.log(reason)
      })
    } else {
      console.log('заполни все')
    }
  }
  function changeAuth() {
    emit('change')
  }
</script>

<template>
    <form @submit.prevent class="auth-input-block-flex">
      <p class="fs-42 white">Регистрация</p>
      <input autocomplete="name" class="form-input" placeholder="Имя" type="text" v-model="name">
      <input autocomplete="nickname" class="form-input" placeholder="Никнейм" type="text" v-model="username">
      <input autocomplete="new-password" class="form-input" placeholder="Пароль" type="password" v-model="password">
      <div class="btn-block-side">
        <app-button @click="changeAuth">Уже есть аккаунт?</app-button>
        <app-button @click="register">Регистрация</app-button>
      </div>
    </form>
</template>

<style scoped>

</style>