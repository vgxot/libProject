<script setup>
import AppButton from "@/components/UI/buttons/app-button.vue";
import $api from "@/http";
import {onMounted, reactive, ref} from "vue";
import FilterBlock from "@/components/sections/filter-block.vue";
import UserItem from "@/components/sections/user-item.vue";
import axios from "axios";
import BookItem from "@/components/sections/book-item.vue";

let placeholder = reactive({count: ''})
const props = defineProps({data: 'page'})
const url = props.data
let page = ref(true)
let sortColumn = ref('')
if (props.data === 'books') {
  page.value = true
  placeholder.count = 'найдётся всё'
  sortColumn.value = 'popularity'
} else {
  page.value = false
  placeholder.count = 'найдутся все'
  sortColumn.value = 'username'
}
console.log(page.value)
const queryInput = ref('')
const openFilter = ref(false)
let values = ref([50, 100, 250])
let elCount = reactive({count: 51})
let limit = ref(50)
let sorting = ref('DESC')
let userQuery = ref('')
let items = reactive({data: []})

onMounted(() => {
  $api.post(`/${ url }/search`, {
    query: queryInput.value,
    sorting: sorting.value,
    sortColumn: sortColumn.value,
    limit: limit.value
  })
    .then((response) => {
      items.data = response.data
    })
})
function search() {
  $api.post(`${ url }/search`, {
      query: queryInput.value,
      sorting: sorting.value,
      sortColumn: sortColumn.value,
      limit: limit.value
    })
    .then((response) => {
      items.data = response.data
      let count = 1;
      for (let i in items.data) {
        count++
      }
      elCount.count = count
    })
}
function searchFilter() {
  axios
    .post(`http://127.0.0.1:3000/api/${ url }/search`, {
      query: userQuery.value,
      sorting: sorting.value,
      sortColumn: sortColumn.value,
      limit: limit.value
    })
    .then((response) => {
      items.data = response.data
      let count = 1;
      for (let i in items.data) {
        count++
      }
      elCount.count = count
    })
}
function filter(val) {
  console.log(val)
  limit.value = val
  searchFilter()
}
function changeSort(val) {
  sorting.value = val
  searchFilter()
}
</script>

<template>
  <div class="search">
    <form class="search-block">
      <div class="query-block">
        <input :placeholder="placeholder.count" class="input" type="search" v-model="queryInput">
        <app-button @submit.prevent @click="search" type="submit" class="button-search bkgd-dark">
          <p class="button-search-text">Найти</p>
          <img class="img-search" src="@/assets/buttons/search.svg" alt="search button">
        </app-button>
        <app-button @click="openFilter = !openFilter" class="open-sort-block bkgd-dark">Фильтр
          <svg class="sort-button-img" width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9743 12.3906C10.7982 12.3906 10.6368 12.3613 10.49 12.3026C10.3432 12.2439
             10.1964 12.1411 10.0497 11.9944L1.33153 3.27621C1.0967 3.04138 0.986618 2.72583 1.0013
              2.32955C1.01597 1.93327 1.14073 1.61771 1.37556 1.38288C1.6691 1.08934 1.98465 0.964584
               2.32223 1.00861C2.6598 1.05265 2.96068 1.19208 3.22486 1.42691L10.9743 9.17637L18.7238
                1.42691C18.9586 1.19208 19.2742 1.05998 19.6705 1.03063C20.0667 1.00128 20.3823 1.13337
                 20.6171 1.42691C20.9107 1.66174 21.0354 1.96996 20.9914 2.35156C20.9474 2.73316 20.8079
                  3.05606 20.5731 3.32024L11.899 11.9944C11.7522 12.1411 11.6054 12.2439 11.4587 12.3026C11.3119
                   12.3613 11.1504 12.3906 10.9743 12.3906Z" fill="white" stroke="#1E1E1E"/>
          </svg>
        </app-button>
      </div>
    </form>
    <app-button @click="openFilter = !openFilter" class="bkgd-dark open-sort-block-mobile">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 960 960"><path d="M430 816q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T430 756h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T530 816H430ZM150 396q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150 336h660q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810 396H150Zm120 210q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T270 546h420q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T690 606H270Z" fill="white"/></svg>
    </app-button>
    <transition-group name="filter">
      <filter-block
          key="0"
          @change-sort="changeSort"
          @filter="filter"
          :count="elCount.count"
          :limit="limit"
          :val="values"
          v-if="openFilter"
          class="filter">
      </filter-block>
      <div key="1">
        <div class="items">
          <transition-group name="items">
            <book-item
                v-if="page"
                v-for="item in items.data"
                key="item.book_id"
                v-bind:book_data="item"
            >
            </book-item>
            <user-item
                v-else
                v-for="item in items.data"
                key="item.username"
                v-bind:user_data="item"
            >
            </user-item>
          </transition-group>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
  @use "@/assets/style/main.scss";
  .search {
    width: 100%;
    height: max-content;
  }
  .search-block {
    @include main.flex(column);
    padding-top: 100px;
  }
  .query-block {
    @include main.flex(row);
    width: 100%;
  }
  .input {
    background-color: main.$dark;
    color: white;
    border: 0;
    margin: 15px;
    padding: 5px 14px;
    font-size: 20px;
    border-radius: 2em;
    outline: none;
    height: 60px;
    width: 600px;
    text-indent: 15px;
  }
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  .button-search {
    height: 40px;
  }
  .img-search {
    display: none;
    width: 32px;
  }
  .items {
    @include main.wrap;
    height: max-content;
    width: 100%;
    min-height: 90vh;
  }
  .filter-move,
  .filter-enter-active,
  .filter-leave-active {
    transition: all 0.5s ease;
  }
  .filter-enter-from,
  .filter-leave-to {
    opacity: 0;
  }
  .filter-leave-active {
    position: absolute;
    top: 200px;
  }
  .items-enter-from {
    opacity: 0;
  }
  .items-enter-active {
    transition: all 1s ease;
  }
  .items-enter-to{
    opacity: 1;
  }
  .items-leave-from {
    opacity: 1;
  }
  .items-leave-active {
    transition: all 1s ease;
  }
  .items-leave-to {
    opacity: 0;
  }
  .items-move {
  }
  .open-sort-block-mobile {
    display: none;
    margin-left: 35px;
    border-radius: 35px;
    padding: 12px;
  }
  .open-sort-block {
    height: 40px;
    margin-left: 15px;
  }
  @media only screen and (max-width: 734px) {
    .input{
      width: 265px;
    }
    .button-search-text, .open-sort-block {
      display: none;
    }
    .button-search {
      border-radius: 35px;
      height: 60px;
      width: 60px;
      padding: 0;
    }
    .img-search {
      display: flex;
    }
  }
</style>