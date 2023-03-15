<template>
  <div class="users">
    <form @submit.prevent class="search-block">
      <div class="query-block">
        <input v-bind:value="searchQuery" @input="inputQuery" placeholder="найдутся всё" class="input" type="search" id="search">
        <button id="button" @click="userSearch()" type="submit" class="button-search search-button">
          <span class="button-search-text">Найти</span>
          <img class="img-search" src="@/../buttons/search.svg" alt="search button">
        </button>
        <my-button @click="openSort = !openSort" class="open-sort-block">Фильтр
          <svg class="sort-button-img" width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9743 12.3906C10.7982 12.3906 10.6368 12.3613 10.49 12.3026C10.3432 12.2439 10.1964 12.1411 10.0497 11.9944L1.33153 3.27621C1.0967 3.04138 0.986618 2.72583 1.0013 2.32955C1.01597 1.93327 1.14073 1.61771 1.37556 1.38288C1.6691 1.08934 1.98465 0.964584 2.32223 1.00861C2.6598 1.05265 2.96068 1.19208 3.22486 1.42691L10.9743 9.17637L18.7238 1.42691C18.9586 1.19208 19.2742 1.05998 19.6705 1.03063C20.0667 1.00128 20.3823 1.13337 20.6171 1.42691C20.9107 1.66174 21.0354 1.96996 20.9914 2.35156C20.9474 2.73316 20.8079 3.05606 20.5731 3.32024L11.899 11.9944C11.7522 12.1411 11.6054 12.2439 11.4587 12.3026C11.3119 12.3613 11.1504 12.3906 10.9743 12.3906Z" fill="white" stroke="#1E1E1E"/>
          </svg>
        </my-button>
      </div>
      <transition name="sort-block">
        <div v-if="openSort" class="sort-block">
          <div class="button-block">
            <my-button @click="Active100" class="button-choice" :class="{ active: isActive100 }">100</my-button>
            <my-button @click="Active500" class="button-choice" :class="{ active: isActive500 }">500</my-button>
            <my-button @click="Active1000" class="button-choice" :class="{ active: isActive1000 }">1000</my-button>
          </div>
          <div class="count-elements">
            <p class="count-text">найдено <span class="count-text-color">{{ userCount - 1 }}</span> юзеров</p>
          </div>
          <my-button @click="sortFunction" class="sort-button">
            <transition name="sort">
              <svg class="sort-button-img" :class="{up: sort, down: sort}" width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9743 12.3906C10.7982 12.3906 10.6368 12.3613 10.49 12.3026C10.3432 12.2439 10.1964 12.1411 10.0497 11.9944L1.33153 3.27621C1.0967 3.04138 0.986618 2.72583 1.0013 2.32955C1.01597 1.93327 1.14073 1.61771 1.37556 1.38288C1.6691 1.08934 1.98465 0.964584 2.32223 1.00861C2.6598 1.05265 2.96068 1.19208 3.22486 1.42691L10.9743 9.17637L18.7238 1.42691C18.9586 1.19208 19.2742 1.05998 19.6705 1.03063C20.0667 1.00128 20.3823 1.13337 20.6171 1.42691C20.9107 1.66174 21.0354 1.96996 20.9914 2.35156C20.9474 2.73316 20.8079 3.05606 20.5731 3.32024L11.899 11.9944C11.7522 12.1411 11.6054 12.2439 11.4587 12.3026C11.3119 12.3613 11.1504 12.3906 10.9743 12.3906Z" fill="white" stroke="#1E1E1E"/>
              </svg>
            </transition>
          </my-button>
        </div>
      </transition>
    </form>
    <div class="users-items">
      <user-item
          v-for="user in users"
          :key="users.username"
          v-bind:user_data="user"
      />
    </div>
  </div>
</template>

<script>
import bookItem from "@/UI/book-item.vue";
import axios from "axios";
import ChoiceButton from "@/UI/choice-button.vue";
import MyButton from "@/UI/button.vue";
import userItem from "@/UI/user-item.vue";
export default {
  name: "search",
  components: {
    MyButton,
    ChoiceButton,
    bookItem,
    userItem
  },
  data() {
    let userCount = 101;
    let limit = 100;
    let sorting = "DESC"
    let sortColumn = "username"
    let userQuery = '*';
    return {
      isActive100: true,
      isActive500: false,
      isActive1000: false,
      sort: false,
      openSort: false,
      limit,
      sorting,
      sortColumn,
      userCount,
      userQuery,
      users: [],
    }
  },
  mounted() {
    axios
        .get('http://127.0.0.1:3000/api/users')
        .then((response) => {
          this.users = response.data
        })

  },
  methods: {
    getUsers() {
      axios
          .post('http://127.0.0.1:3000/api/users/search', {
            query: this.userQuery,
            sorting: this.sorting,
            sortColumn: this.sortColumn,
            limit: this.limit
          })
          .then((response) => {
            this.users = response.data
            let count = 1;
            for (let i in this.users) {
              count++
            }
            this.userCount = count
          })
    },
    userSearch() {
      this.getUsers()
    },
    inputQuery(event) {
      this.userQuery = event.target.value
    },
    sortFunction() {
      if (this.sort === true) {
        this.sort = false
        this.sorting = "DESC"
      }
      else {
        this.sort = true
        this.sorting = "ASC"
      }
      this.getUsers()
    },
    Active100() {
      this.isActive100 = true
      this.isActive500 = false
      this.isActive1000 = false
      this.limit = 100
      this.getUsers()
    },
    Active500() {
      this.isActive100 = false
      this.isActive500 = true
      this.isActive1000 = false
      this.limit = 500
      this.getUsers()
    },
    Active1000() {
      this.isActive100 = false
      this.isActive500 = false
      this.isActive1000 = true
      this.limit = 1000
      this.getUsers()
    }
  }
}
</script>

<style scoped>
.users {                        /*  */
  width: 100%;
  height: max-content;
  background-color: #404040;
}
.search-block {                        /* form, главный блок поиска */
  width: 100%;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.query-block {                        /* блок с поиском */
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.input {                        /* блок ввода запроса */
  font-family: "Nunito", sans-serif;
  background: #1e1e1e;
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
input[type="search"]::-webkit-search-cancel-button {                        /* убирает крестик при вводе запроса */
  -webkit-appearance: none;
}
.button-search {                        /* кнопка поиска */
  width: 120px;
  height: 60px;
  border: 0;
  border-radius: 2em;
  color: #f5f5f5;
  font-size: 22px;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  background-color: #1e1e1e;
  transition: 150ms ease-in;
}
.button-search:hover {
  transition: 150ms ease-in;
  background-color: #252525;
}
.img-search {                        /* мобильная кнопка найти */
  display: none;
  height: 30px;
  filter: invert(1);
  margin: 15px;
}
.open-sort-block {                        /* открывает блок с фильтрами */
  width: 150px;
  height: 60px;
  margin: 0 25px;
}
.sort-block-enter-active,
.sort-block-leave-active {
  transition: all 300ms ease-in-out;
}
.sort-block-enter-from,
.sort-block-leave-to {
  opacity: 0;
  transform: translateY(-60%);
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

.sort-block {                        /* блок с фильтрами, открывается */
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.books-amount-button {                        /* количество книг */
}
.button-block {
  margin: 0 15px;
  background-color: #1E1E1E;
  width: max-content;
  border-radius: 17px;
  border: 4px solid #1E1E1E;
}
.button-choice {
  width: 90px;
  height: 40px;
  border-radius: 13px;
}
.button-choice:hover {
  background-color: #484848;
}
.active {
  background-color: #303030;
}
.count-elements {                        /* выводит количество найденных элементов */
  margin: 0 150px;
}
.count-text {
  text-align: center;
  font-size: 20px;
  color: #B5B5B5;
}
.count-text-color {
  color: #B3FF66;;
}
.sort-button {
  width: 48px;
  height: 48px;
  padding: 0;
  margin: 0 20px;
}
/* сетка книг */

.users-items {
  padding-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
@media only screen and (max-width: 734px) {
  .input{
    width: 265px;
  }
  .button-search-text {
    display: none;
  }
  .search-button {
    width: 60px;
    height: 60px;
    border-radius: 35px;
    background-color: #1e1e1e;
  }
  .img-search {
    display: block;
  }
  .users-items {
  }
  .button.open-sort-block {
    display: none;
  }
}
</style>