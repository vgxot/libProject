<template>
  <div class="block-1">
    <div class="auth-block">
      <div v-if="!logReg" class="form-auth">
        <p class="form-title">Вход</p>
          <form class="form-auth" @submit.prevent="authUser">
            <input type="text" class="form-input" id="username" placeholder="Никнейм" v-model="user.username">
            <input type="password" class="form-input" id="password" placeholder="Пароль" v-model="user.password">
            <my-button class="log-btn" type="submit" :disabled="!canRegister">Войти</my-button>
          </form>
      </div>
      <form v-if="logReg" @submit.prevent="createUser" class="form-auth">
        <p class="form-title">Регистрация</p>
        <input type="text" class="form-input" placeholder="Никнейм" v-model="user.username">
        <input type="password" class="form-input" placeholder="Пароль" v-model="user.password">
        <transition name="name">
          <input type="text" class="form-input" placeholder="Имя" v-model="user.name">
        </transition>
        <div class="block-btn">
            <my-button v-if="logReg" class="reg-btn" type="submit" :disabled="!canRegister">Регистрация</my-button>
        </div>
      </form>
      <my-button @click="switchBlock" class="switch-reg-log">Есть аккаунт?</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/UI/button.vue";
import axios from "axios";

export default {
  components: {MyButton},
  data() {
    return {
      logReg: true,
      user: {
        username: '',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    createUser() {
      axios
          .post('http://127.0.0.1:3000/api/user', {
            username: this.username,
            name: this.name,
            password: this.password
          })
          .then((response) => {
            console.log('регистрируем')
          })
    },
    authUser() {
      axios
          .post('http://127.0.0.1:3000/api/user/auth', {
            username: this.username,
            password: this.password
          })
          .then((response) => {
            authDone()
          })
    },
    switchBlock() {
      this.logReg = this.logReg === false;
    },
    canRegister() {
      return this.username === '' && this.name === '' && this.password === ''
    },
    registerDone() {                                  // анимация при успешной регистрации

    },
    authDone() {

    }
  },
  name: "auth"
}
</script>

<style scoped>
  .name-enter-active {
    transition: all 300ms ease-in-out;
  }
  .name-leave-active {
    transition: all 250ms ease-out;
    transform: translateY(-50%);
  }

  .name-enter-from,
  .name-leave-to {
    opacity: 0;
  }


  .block-1 {
    background-image: url("@/../images/finland-forest-max.webp");
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
  .switch-reg-log {
    margin-top: 25px;
  }
  .log-btn {
    margin: 25px 0 0 auto;
    background-color: rgba(0, 0, 0, 0.70);
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