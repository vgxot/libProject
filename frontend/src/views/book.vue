<script setup>
import Ratings from "@/components/UI/pop-up-s/ratings.vue";
import ButtonBuy from "@/components/UI/buttons/button-buy.vue";
import $api, {apiUrl} from "@/http";
import axios from "axios";
import {onMounted, ref} from "vue";

let book = ref([])
let genres = ref([])
let tags = ref([])
let ratingShow = ref(false)

onMounted( async ()=> {
  const id = window.location.pathname.split('/')[2]
  await $api.get(`${apiUrl}/books/info/${id}`)
    .then((response) => {
      console.log(id)
      book.value = response.data[0][0]
      genres.value = response.data[1][0]
      tags.value = response.data[2][0]
    })
})

function ratingOpen() {
  ratingShow.value = !ratingShow.value
}
function downloadBook() {
  console.log('загружаю книгу')
}
</script>

<template>
  <div class="book">
    <div class="block-1">
      <div class="block-book">
        <div class="book-block-image">
          <img class="book-image" :src="'http://127.0.0.1:3000/img/book/mid/' + book.photo_link" alt="">
        </div>
        <div class="book-about">
          <div class="book-title">{{ book.book_name }}</div>
          <div class="book-author">{{book.author}}</div>
          <div class="book-rating" @click="ratingOpen">
            <p>{{ book.rating }}</p>
            <img width="24" src="@/assets/buttons/starADF.svg" alt="">
            <ratings v-if="ratingShow"></ratings>
          </div>
          <button-buy v-on:click="downloadBook" class="book-get">Скачать</button-buy>
          <div class="book-description">Описание
            <div class="book-description-text">{{ book.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-block">
      <div class="about-block-additional">
        <div class="block-additional">
          <p class="additional-title">Дополнительная информация</p>
          <p class="pages additional-text">
            Количество страниц: <span class="additional-value additional-text">{{ book.pages }}</span></p>
          <p class="year additional-text">
            Дата написания: <span class="additional-value additional-text">{{ book.year }}</span></p>
          <p class="age additional-text">
            Возрастной рейтинг: <span class="additional-value additional-text">{{ book.age }}</span></p>
          <p class="isbn additional-text">
            ISBN: <span class="additional-value additional-text">{{ book.isbn }}</span></p>
        </div>
      </div>
      <div class="about-block-genre">
        <div class="genre-block">
          <p class="block-title">Жанры:
            <span v-for="genre in genres" class="block-genre-text">
              <router-link class="link" to="/books">{{ genre.genre }}, </router-link>
            </span>
          </p>
        </div>
        <div class="tags-block">
          <p class="block-title">Теги:
            <span v-for="tag in tags" class="block-genre-text">
              <router-link class="link" to="/books">{{ tag.tags }}, </router-link>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block-1 {
  display: flex;
  height: 100vh;
  padding: 50px 100px;
  background-color: #1e1e1e;
  margin: 0 auto;
  min-width: 750px;
  max-width: 1500px;
}
.block-book {
  display: flex;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
}
.book-block-image {
  margin-top: auto;
  margin-bottom: auto;
}
.book-image {
  height: 550px;
  background-size: cover;
}
.book-about {
  margin-left: 100px;
  color: #f5f5f5;
}
.book-title {
  font-size: 48px;
  line-height: 100%;
}
.book-author {
  margin-top: 20px;
  font-size: 32px;
}
.book-rating {
  margin-top: 10px;
  display: flex;
}
.book-rating p {
 font-size: 24px;
  color: #B3FF66;
}
.rating-star-svg {
  margin-left: 5px;
  height: 24px;
  width: 23px;
  margin-top: 3px;
}
.book-get {
  margin: 10px 0;
  font-size: 28px;
  background-color: #B3FF66;
  color: #1E1E1E;
}
.book-get:hover,
.book-get:active {
  background-color: #1e1e1e;
}
.book-description {
  margin-top: 5px;
  font-size: 24px;
}
.book-description-text {
  margin-top: 15px;
  font-size: 18px;
}
.about-block {               /* блок about */
  padding: 100px;
  display: flex;
}
.about-block-additional {               /* левая часть блока about */
  height: 300px;
  width: 100%;
}
.block-additional {               /* блок с дополнительной информацией */
  background-color: #1E1E1E;
  width: 500px;
  border-radius: 35px;
  padding: 35px;
}
.additional-title {               /* стиль для заголовка */
  font-size: 28px;
  color: white;
  text-align: center;
  margin-bottom: 25px;
}
.additional-text {               /* общий стиль для всего текста внутри блока кроме заголовка */
  font-size: 24px;
  color: white;
  margin-top: 10px;
}
.additional-value {               /* общий стиль для значений */
  color: #FFA63E;
  margin-left: 15px;
}
.pages {
}
.year {
}
.age {
}
.isbn {
}

.about-block-genre {               /* правая часть about */
  width: 100%;
  color: white;
  padding: 35px;
}
.genre-block {
  margin-bottom: 35px;
}
.link {
  transition: color 150ms ease-in-out;
  cursor: pointer;
}
.link:hover {
  color: #ff6200;
}
.tags-block {

}
.block-title {
  font-size: 24px;
}
.block-genre-text {
  font-size: 20px;
  color: #FFA63E;
}

@media only screen and (max-width: 734px) {
  .block-1 {
    display: block;
    height: auto;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #1e1e1e;
    margin: 0 auto auto 0;
    padding-top: 70px;
    min-width: 300px;
    max-width: 700px;
  }
  .block-book {
    align-items:center;
    display: block;
    position: relative;
    width: 100%;
  }
  .book-block-image {
    width: auto;
    display: flex;
    justify-content: center;
  }
  .book-image {
    margin-left: auto;
    margin-right: auto;
    height: 400px;
    background-size: cover;
  }
  .book-about {
    color: #f5f5f5;
    margin: 0;
    text-align: center;
  }
  .book-title {
    font-size: 32px;
    line-height: 100%;
    margin-top: 15px;
  }
  .book-author {
    margin-top: 10px;
    font-size: 20px;
  }
  .book-rating {
    margin-top: 10px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 70px;
  }
  .book-rating p {
    font-size: 32px;
    color: #B3FF66;
  }
  .rating-star-svg {
    height: 24px;
    width: 23px;
    margin-top: 3px;
    margin-left: auto;
    margin-right: auto;
  }
  .book-get {
    margin: 10px 0;
    font-size: 28px;
    background-color: #B3FF66;
    color: #1E1E1E;
  }
  .book-get:hover,
  .book-get:active {
    background-color: #1e1e1e;
  }
  .book-description {
    margin-top: 5px;
    font-size: 24px;
  }
  .book-description-text {
    position: relative;
    margin-top: 15px;
    font-size: 20px;
  }
  .about-block {
    padding: 30px;
    display: block;
    height: auto;
  }
  .about-block-genre {
    padding: 15px;
    width: 85%;
  }
  .about-block-additional {
    height: 190px;
    width: 100%;
  }
  .block-additional {
    background-color: #1E1E1E;
    width: 100%;
    height: 190px;
    border-radius: 35px;
    padding: 0;
  }
  .additional-text {
    font-size: 20px;
    color: white;
    text-align: center;
  }
  .genre-block {
    width: 100%;
  }
}
</style>