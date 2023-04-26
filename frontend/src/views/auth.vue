<script setup>
import Register from "@/components/sections/register.vue";
import Login from "@/components/sections/login.vue";
import router from "@/router";
import {onMounted, ref} from "vue";
import AppButton from "@/components/UI/buttons/app-button.vue";

const regLog = ref(true)

onMounted(() => {
  if (localStorage.getItem('token') !== null) {
    router.push({path: "/account"})
    console.log('токен есть')
  } else {
    console.log('токена нет, войдите')
  }
})
function auth(name, username, password) {
  console.log(name.value, username.value, password.value)
}
function change() {
  regLog.value = !regLog.value
}
</script>

<template>
  <div class="auth">
    <div class="auth-block">
      <div class="auth-input-block">
        <transition name="auth" mode="out-in">
          <register v-if="regLog" @change="change"></register>
          <login v-else @change="change"></login>
        </transition>
      </div>
      <div class="auth-block-btn">

      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/style/main.scss";
.auth {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);  background-size: cover;
}
.auth-block {
  height: max-content;
  width: max-content;
  padding: 25px;
  display: flex;
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  border-radius: 25px;
  margin: auto;
  background-color: #00000075;
  @include main.blur;
  flex-direction: column;
  align-items: center;
}
.auth-input-block-flex {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.auth-block-btn {
  display: flex;
}









.form-input {
  background-color: main.$dark;
  color: main.$light;
  border: 0;
  margin: 10px;
  padding: 5px 14px;
  font-size: 24px;
  border-radius: 1em;
  outline: none;
  height: 60px;
  width: 350px;
  text-indent: 15px;
}
.btn-block-side {
  display: flex;
  justify-content: space-between;
}
.auth-enter-active {
  transition: all 500ms cubic-bezier(.2, 1, .15, 1);
}

.auth-leave-active {
  transition: all 500ms cubic-bezier(1, 1, .15, 1);
}

.auth-enter-from {
  opacity: 1;
  transform: translateX(-150%);
}

.auth-leave-to {
  opacity: 0;
  transform: translateX(+150%);
}
</style>