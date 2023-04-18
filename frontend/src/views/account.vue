<script setup>
import AccountBase from "@/components/sections/account-base.vue";
import Setting from "@/components/sections/setting.vue";
import AppButton from "@/components/UI/buttons/app-button.vue";
import {onMounted, ref} from "vue";
import $api from "../http";

const settingOpen = ref(false)
let userID = ref('')
let userData = ref([])
let books = ref([])
let regDateTime = ref('')

onMounted(() => {
  $api.get(`/user/account`, {
    }).then((response) => {
      userData.value = [response.data[0]['avatar_link'], response.data[0]['background_link'], response.data[0]['username']]
      userID.value = response.data[0]['username']
      regDateTime.value = response.data[0]['reg_date'] + ' ' + response.data[0]['reg_time']
      console.log(response)
    })
})
</script>

<template>
  <transition name="ok">
    <setting v-if="settingOpen" @close="settingOpen = !settingOpen"></setting>
  </transition>
  <account-base :userData="userData">
    <template v-slot:setting>
      <app-button class="setting-button" @click="settingOpen = !settingOpen">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M27.3 44h-6.6q-.55 0-.975-.35-.425-.35-.525-.9l-.8-5.05q-.95-.35-2-.95t-1.85-1.25L9.9 37.65q-.55.25-1.1.075T7.95 37l-3.3-5.85q-.3-.5-.15-1.05t.6-.9l4.3-3.15q-.1-.45-.125-1.025Q9.25 24.45 9.25 24q0-.45.025-1.025T9.4 21.95L5.1 18.8q-.45-.35-.6-.9-.15-.55.15-1.05L7.95 11q.3-.55.85-.725.55-.175 1.1.075l4.65 2.15q.8-.65 1.85-1.25t2-.9l.8-5.1q.1-.55.525-.9Q20.15 4 20.7 4h6.6q.55 0 .975.35.425.35.525.9l.8 5.05q.95.35 2.025.925Q32.7 11.8 33.45 12.5l4.65-2.15q.55-.25 1.1-.075t.85.725l3.3 5.8q.3.5.175 1.075t-.625.925l-4.3 3.05q.1.5.125 1.075.025.575.025 1.075t-.025 1.05q-.025.55-.125 1.05l4.3 3.1q.45.35.6.9.15.55-.15 1.05L40.05 37q-.3.55-.85.725-.55.175-1.1-.075l-4.65-2.15q-.8.65-1.825 1.275-1.025.625-2.025.925l-.8 5.05q-.1.55-.525.9-.425.35-.975.35ZM24 30.5q2.7 0 4.6-1.9 1.9-1.9 1.9-4.6 0-2.7-1.9-4.6-1.9-1.9-4.6-1.9-2.7 0-4.6 1.9-1.9 1.9-1.9 4.6 0 2.7 1.9 4.6 1.9 1.9 4.6 1.9Zm0-3q-1.45 0-2.475-1.025Q20.5 25.45 20.5 24q0-1.45 1.025-2.475Q22.55 20.5 24 20.5q1.45 0 2.475 1.025Q27.5 22.55 27.5 24q0 1.45-1.025 2.475Q25.45 27.5 24 27.5Zm0-3.5Zm-2.2 17h4.4l.7-5.6q1.65-.4 3.125-1.25T32.7 32.1l5.3 2.3 2-3.6-4.7-3.45q.2-.85.325-1.675.125-.825.125-1.675 0-.85-.1-1.675-.1-.825-.35-1.675L40 17.2l-2-3.6-5.3 2.3q-1.15-1.3-2.6-2.175-1.45-.875-3.2-1.125L26.2 7h-4.4l-.7 5.6q-1.7.35-3.175 1.2-1.475.85-2.625 2.1L10 13.6l-2 3.6 4.7 3.45q-.2.85-.325 1.675-.125.825-.125 1.675 0 .85.125 1.675.125.825.325 1.675L8 30.8l2 3.6 5.3-2.3q1.2 1.2 2.675 2.05Q19.45 35 21.1 35.4Z"/>
        </svg>
      </app-button>
    </template>
    <template v-slot:datetime>
      <p class="fs-24 bold">Дата регистрации:<br>{{ regDateTime }}</p>
    </template>
  </account-base>
</template>

<style lang="scss">
@use "@/assets/style/main.scss";

.setting-button {
  position: absolute;
  right: 0;
}




































.ok-enter-active {
  transition: all 950ms cubic-bezier(.2, 1, .15, 1);
}

.ok-leave-active {
  transition: all 500ms cubic-bezier(1, 1, .15, 1);
}

.ok-enter-from {
  opacity: 1;
  transform: translateY(-150%);
}

.ok-leave-to {
  opacity: 0;
  transform: translateY(+150%);
}
</style>