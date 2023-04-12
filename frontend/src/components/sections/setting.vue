<script setup>
import AppButton from "@/components/UI/buttons/app-button.vue";
import {ref} from "vue";
import PopUpBlock from "@/components/UI/pop-up-s/popUpBlock.vue";
import axios from "axios";

const logoutAlert = ref(false)
const emit = defineEmits(['close'])






function logout() {
}
</script>

<template>
  <div class="setting">
    <transition name="ok">
      <pop-up-block v-if="logoutAlert" class="alert-block">
        <div class="white fs-32">Вы уверены, что хотите удалить аккаунт?</div>
        <div class="alert-btn-block">
          <AppButton class="alert-button" type="button" @click="logout">Да</AppButton>
          <AppButton class="alert-button" type="button" @click="logoutAlert = !logoutAlert">Нет</AppButton>
        </div>
      </pop-up-block>
    </transition>
    <div class="setting-title fs-42">
      Настройки
      <div class="setting-close" @click="emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 26.1 13.5 36.6q-.45.45-1.05.45-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05L21.9 24 11.4 13.5q-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45L24 21.9l10.5-10.5q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05L26.1 24l10.5 10.5q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45-.6 0-1.05-.45Z" fill="blace"/></svg>
      </div>
    </div>
    <div class="setting-block">
      <div class="block-left">
        <div class="setting-section">
          <div class="setting-key">Поменять аватарку</div>
          <div class="setting-key">Поменять задний фон</div>
        </div>
        <div class="setting-section">
          <div class="setting-key">Сменить пароль</div>
          <div class="setting-key">Выйти из аккаунта</div>
        </div>
          <div class="setting-key c4b80" @click="logoutAlert = !logoutAlert">Удалить аккаунт</div>
      </div>
      <div class="block-right">
        <label class="input-file">
          <input id="qr-input-file" name="file" type="file">
          <AppButton class="input-file-btn">Выбрать файл</AppButton>
        </label>
        <label class="input-file">
          <input id="qr-input-file" name="file" type="file">
          <AppButton class="input-file-btn">Выбрать файл</AppButton>
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/style/main.scss";
.setting {
  position: fixed;
  margin: auto;
  top: 0; bottom: 0; left: 0; right: 0;
  width: 40%;
  height: max-content;
  padding: 25px 35px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
}
.setting-title {
  text-align: center;
  position: relative;
  margin-bottom: 25px;
}
.setting-close {
  position: absolute;
  top: 0;
  right: 0;
}
.setting-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.block-left {
  display: flex;
  flex-direction: column;
}
.block-right {
  display: flex;
  flex-direction: column;
}
.setting-section {
  margin: 15px 0;
}
.setting-key {
  font-size: 24px;
  margin: 5px 0;
}
.input-file {
  position: relative;
  display: inline-block;
}

.input-file-btn {
  font-size: 20px;
  margin: 5px 0;
}

.input-file input[type=file] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}

.input-file:active .input-file-btn {
  background-color: #3a3a3a;
}
.alert-block {
  position: absolute;
  height: max-content;
  background-color: #1e1e1e;
  align-items: center;
  justify-content: center;
}
.alert-btn-block {
  display: flex;
}
.alert-button {
  background-color: main.$gray;
  margin: 25px 15px 0 15px;
}
.c4b80 {
  color: #f52222;
}



@media only screen and (max-width: 734px) {
  .setting {
    position: fixed;
    margin: auto;
    top: 0; bottom: 0; left: 0; right: 0;
    width: 100%;
    height: max-content;
    padding: 20px 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
  }
  .setting-title {
    text-align: center;
    position: relative;
    margin-bottom: 25px;
  }
  .setting-close {
    position: absolute;
    top: 0;
    right: 0;
  }
  .setting-block {
    display: block;
  }
  .block-left {
    display: block;
  }
  .block-right {
    display: block;
  }
  .setting-section {
    margin: 15px 0;
  }
  .setting-key {
    font-size: 24px;
    margin: 5px 0;
  }
  .input-file {
    position: relative;
    display: inline-block;
  }

  .input-file-btn {
    font-size: 20px;
    margin: 5px 0;
  }

  .input-file input[type=file] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;
  }

  .input-file:active .input-file-btn {
    background-color: #3a3a3a;
  }
  .alert-block {
    position: absolute;
    height: max-content;
    background-color: #1e1e1e;
    align-items: center;
    justify-content: center;
  }
  .alert-btn-block {
    display: flex;
  }
  .alert-button {
    background-color: main.$gray;
    margin: 25px 15px 0 15px;
  }
}
</style>