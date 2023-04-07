<script setup>
import AppButton from "@/components/UI/buttons/app-button.vue";
import {reactive, ref} from "vue";

const emit = defineEmits(['filter', 'changeSort'])
const props = defineProps(['val', 'count'])
const counter = props.val
let count = reactive({count: props.count})

let activeA = ref(true)
let activeB = ref(false)
let activeC = ref(false)
let limit = reactive({count: 100})
let sort = reactive({count: false});
let sorting = ref("DESC");

function sendValue(limit) {
  console.log(limit)
  emit('filter', limit)
}
function sortFunction() {
  if (sort.count === true) {
    console.log(sort.count)
    sort.count = !sort.count
    sorting.value = "DESC"
  } else {
    console.log(sort.count)
    sort.count = !sort.count
    sorting.value = "ASC"
  }
  emit('changeSort', sorting.value)
}
function activeAA() {
  activeA.value = true
  activeB.value = false
  activeC.value = false
  sendValue(100)
}
function activeBB() {
  activeA.value = false
  activeB.value = true
  activeC.value = false
  sendValue(300)
}
function activeCC() {
  activeA.value = false
  activeB.value = false
  activeC.value = true
  sendValue(500)
}
</script>

<template>
    <div class="sort-block">
      <div class="button-block">
        <button :class="{ active: activeA }" class="button-choice" type="button" @click="activeAA">{{ props.val[0] }}</button>
        <button :class="{ active: activeB }" class="button-choice" type="button" @click="activeBB">{{ props.val[1] }}</button>
        <button :class="{ active: activeC }" class="button-choice" type="button" @click="activeCC">{{ props.val[2] }}</button>
      </div>
      <div class="count-elements">
        <p class="count-text fs-24 white">найдено <span class="count-color">{{ count.count - 1}}</span> элементов</p>
      </div>
      <app-button class="sort-button" @click="sortFunction">
        <transition name="sort">
          <svg :class="{up: sort.count, down: sort.count}" class="sort-button-img" fill="none" height="13" viewBox="0 0 22 13"
               width="22" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.9743 12.3906C10.7982 12.3906 10.6368 12.3613 10.49 12.3026C10.3432 12.2439 10.1964 12.1411 10.0497 11.9944L1.33153 3.27621C1.0967 3.04138 0.986618 2.72583 1.0013 2.32955C1.01597 1.93327 1.14073 1.61771 1.37556 1.38288C1.6691 1.08934 1.98465 0.964584 2.32223 1.00861C2.6598 1.05265 2.96068 1.19208 3.22486 1.42691L10.9743 9.17637L18.7238 1.42691C18.9586 1.19208 19.2742 1.05998 19.6705 1.03063C20.0667 1.00128 20.3823 1.13337 20.6171 1.42691C20.9107 1.66174 21.0354 1.96996 20.9914 2.35156C20.9474 2.73316 20.8079 3.05606 20.5731 3.32024L11.899 11.9944C11.7522 12.1411 11.6054 12.2439 11.4587 12.3026C11.3119 12.3613 11.1504 12.3906 10.9743 12.3906Z"
                fill="white" stroke="#1E1E1E"/>
          </svg>
        </transition>
      </app-button>
    </div>
</template>

<style lang="scss" scoped>
  @use "@/assets/style/main.scss";
  .sort-block {
    @include main.flex(row);
    margin: 25px 0;
    width: 100%;
  }
  .button-block {
    margin: 0 15px;
    background-color: main.$dark;
    width: max-content;
    border-radius: 17px;
    border: 4px solid main.$dark;
    @include main.flex(row);
  }
  .button-choice {
    width: 90px;
    height: 40px;
    border-radius: 13px;
    color: white;
    font-size: 20px;
    background-color: main.$dark;
    cursor: pointer;
  }
  .count-text {
    margin: 0 150px;
  }
  .count-color {
    color: main.$green;
  }
  .active {
    background-color: #303030;
  }
  .sort-button-img {                        /*  */
    margin: auto;
  }
  .up {
    rotate: 0deg;
  }
  .down {
    rotate: 180deg;
  }
</style>