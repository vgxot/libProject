<template>
  <div class="block-1">
    <div class="auth-block">
      <form @submit.prevent="createUser" class="form-auth">
        <p class="form-title">Регистрация</p>
        <input type="text" class="form-input" id="username" placeholder="Никнейм" v-model="user.username">
        <input type="text" class="form-input" id="name" placeholder="Имя" v-model="user.name">
        <input type="password" class="form-input" id="password" placeholder="Пароль" v-model="user.password">
        <div class="block-btn">
          <app-button class="log-btn">Вход</app-button>
          <app-button class="reg-btn" type="submit" :disabled="!canRegister">Регистрация</app-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/UI/buttons/app-button.vue";

export default {
  components: {AppButton},
  data() {
    return {
      user: {
        username: '',
        name: '',
        password: ''
      }
    }
  },
  name: "auth"
}
</script>

<style scoped>
  .block-1 {
    background-image: url("@/../images/vincent-guth-MAxHEAaAukI-unsplash.webp");
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
  .form-auth {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-width: 200px;
    max-width: 500px;
  }
  .form-title {
    margin-bottom: 15px;
    font-size: 48px;
    color: white;
    text-align: center;
  }
  .auth-block {
    margin: 0 auto;
    padding: 150px 75px 75px 75px;
  }
  .form-input {
    background: #1e1e1e;
    color: #ffffff;
    border: 0;
    font-family: Inter, sans-serif;
    padding: 5px 20px;
    font-size: 20px;
    border-radius: 17px;
    outline: none;
    height: 50px;
    margin: 10px 0;
    max-width: 500px;
  }
  .block-btn {
    display: flex;
  }
  .log-btn {
    margin: 25px auto 0 0;
    background-color: rgba(0, 0, 0, 0.70);
    backdrop-filter: blur(5px);
  }
  .reg-btn {
    position: relative;
    margin: 25px 0 0 auto;
  }
  @media only screen and (max-width: 734px) {
    .auth-block {
      padding: 100px 25px 25px;
    }
  }
</style>