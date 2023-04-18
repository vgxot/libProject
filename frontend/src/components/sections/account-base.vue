<script setup>
import BookItemRating from "@/components/sections/book-item-rating.vue";
import $api from "@/http";
import {gsap} from "gsap";
import {onMounted, reactive, ref, watch} from "vue";
const props = defineProps({userData: 'userData', username: 'username'})
const userData = ref([])
let ratings = ref([])
let openRatings = ref(false)
let username = ref('')
let countMarks = reactive({number: 1})
const number = ref(1)
watch(number, (n) => {
  gsap.to(countMarks, {duration: 2, number: Number(n) || 0})
})

onMounted(() => {
  $api.get(`/users/${props.username}`)
    .then((response) => {
      userData.value = response.data
      console.log(userData.value[0])

    })
  $api.get(`/ratings/${props.username}`)
    .then((response) => {
      ratings.value = response.data
      let count = 0
      for (let i in response.data) {
        count += 1
      }
      number.value += count
    })
})


</script>

<template>
  <div class="user">
    <div class="user-header">
      <img class="user-header-background" :src="'http://127.0.0.1:3000/img/background/' + userData[3]" alt="">
      <div class="user-header-pre-block">
        <div class="user-header-block">
          <img class="user-header-avatar" :src="'http://127.0.0.1:3000/img/user/' + userData[2]" alt="">
          <div class="header-block-username fs-32">{{userData[0]}}</div>
          <slot name="setting"/>
        </div>
      </div>
    </div>
    <div class="block-0"></div>
    <div class="block-2">
      <button
          @click="openRatings = !openRatings"
          type="button"
          class="block-2-title fs-24 white"
      >Оценки пользователя: {{ countMarks.number.toFixed(0) - 1 }}
        <svg class="block-2-title-svg" :class="{'open': openRatings}" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M24 30.15q-.3 0-.55-.1-.25-.1-.5-.35l-9.9-9.9q-.4-.4-.375-1.075.025-.675.425-1.075.5-.5 1.075-.425.575.075 1.025.475l8.8 8.8 8.8-8.8q.4-.4 1.075-.45.675-.05 1.075.45.5.4.425 1.05-.075.65-.475 1.1l-9.85 9.85q-.25.25-.5.35-.25.1-.55.1Z" fill="black"/>
        </svg>
      </button>
      <transition-group name="filter">
        <div key="0"
             v-if="openRatings"
             class="block-2-for-rating">
          <book-item-rating
              v-for="rating in ratings"
              key="rating.book_id"
              v-bind:ratings_data="rating"
          >
          </book-item-rating>
        </div>
        <div key="1"
             class="block-2-other">
        </div>
      </transition-group>
      <slot name="datetime"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/style/main.scss";

.user {
  background-color: #dadada;
}

.block-0 {
  width: 100%;
  height: 90px;
  background-color: #bababa;
}

.user-header {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.user-header-background {
  width: 100%;
  height: 375px;
  pointer-events: none;
  object-fit: cover;
}
.user-header-avatar {
  top: -108px;
  position: absolute;
  width: 192px;
  height: 192px;
  background-size: cover;
  border-radius: 25px;
}
.user-header-pre-block {
  top: 285px;
  position: absolute;
  width: 60%;
  background-color: white;
  border-radius: 25px;
  height: 150px;
  padding: 15px;
}
.user-header-block {
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}
.header-block-username {

}
.block-1 {
  height: max-content;
}
.block-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  padding: 30px 75px;
  background-color: #bababa;
}
.block-2-title {
  background-color: white;
  border-radius: 20px;
  margin-bottom: 15px;
  padding: 15px 25px;
  @include main.flex(center);
  justify-content: space-between;
  width: 60%;
  color: black;
  transition: background-color 150ms linear;
}
.block-2-title:hover {
  transition: background-color 150ms linear;
}
.block-2-title-svg {
  transition: all 1250ms cubic-bezier(0, 1, .15, 1);
}
.block-2-title-svg.open {
  transform: rotate(180deg);
  transition: all 1250ms cubic-bezier(0, 1, .15, 1);
}
.block-2-for-book-name {
  margin: 0 25px;
}
.block-2-for-rating {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.block-2-other {

}
.filter-enter-active,
.filter-leave-active {
  transition: all 750ms ease;
}
.filter-move {
  transition: all 500ms ease;
}
.filter-enter-from,
.filter-leave-to {
  opacity: 0;
}
.filter-leave-active {
  position: absolute;
  top: 200px;
  transition: 500ms;
}
@media only screen and (max-width: 734px) {
  .block-2 {
    padding: 25px 15px;
  }
  .header-block-username {
    font-size: 24px !important;
  }
  .user-header-pre-block {
    width: 80%;
  }
}
</style>