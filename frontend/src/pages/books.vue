<template>
  <div class="books">
    <div class="main-0"></div>
    <form @submit.prevent class="search-block">
      <input v-bind:value="query" @input="inputQuery" placeholder="найдётся всё" class="input" type="search" id="search">
      <button id="button" @click="bookSearch()" type="submit" class="button search-button">
        <span class="button-search-text">Найти</span>
        <img class="img-search" src="@/../buttons/search.svg" alt="search button">
      </button>
    </form>
    <div class="count-elements">
      <p class="count-text">найдено элементов: </p>
    </div>
    <div class="books-items">
      <book-item
          v-for="book in books"
          :key="books.book_id"
          v-bind:book_data="book"
      />
    </div>
  </div>
</template>

<script>
import bookItem from "@/UI/book-item.vue";
import axios from "axios";
export default {
  name: "search",
  components: {
    bookItem
  },
  data() {
    let book_query = '';
    return {
      book_query,
      books: []
    }
  },
  mounted() {
    axios
        .get('http://127.0.0.1:3000/api/books')
        .then((response) => {
      this.books = response.data
    })
  },
  methods: {
    bookSearch() {
      let book_query = this.book_query
      axios
          .post('http://127.0.0.1:3000/api/books/search', {
            query: book_query
          })
          .then((response) => {
            this.books = response.data
          })
    },
    inputQuery(event) {
      this.book_query = event.target.value
    }
  }
}
</script>

<style scoped>
.books {
  width: 100%;
  height: max-content;
  background-color: #404040;
}
.main-0 {
  height: 60px;
  width: 100%;
}
.top-menu {
  background-color: rgba(0, 0, 0, 0.55);
}
.search-block {
  width: 100%;
  height: 60px;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.input {
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

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
.img-search {
  display: none;
}
.button {
  width: 110px;
  height: 60px;
  border: 0;
  border-radius: 2em;
  color: #f5f5f5;
  font-size: 20px;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  background-color: #1e1e1e;
  transition: 150ms ease-in;
}
.button:hover {
  transition: 150ms ease-in;
  background-color: #252525;
}
.count-elements {
  margin-top: 10px;
}
.count-text {
  text-align: center;
  font-size: 20px;
  color: #B5B5B5;
}

/*            */

.img-search {
  display: none;
  height: 30px;
  filter: invert(1);
  margin: 15px;
}

/* таблица */

.books-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 25px;
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
  .books-items {
    grid-template-columns: 1fr;
  }
}
</style>