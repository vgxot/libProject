<template>
    <div class="block-1">
      <div class="block-book">
        <div class="book-block-image">
          <img class="book-image" :src="'http://127.0.0.1:3000/img/book/mid/' + book.photo_link" alt="">
        </div>
        <div class="book-about">
          <div class="book-title">{{ book.book_name }}</div>
<!--          <index-link class="book-name text" :to="suthor"></index-link> тут будет ссылка на книги автора-->
          <div class="book-author">{{book.author}}</div>
          <div class="book-rating">
            <p>{{ book.rating }}</p>
            <svg class="rating-star-svg" width="17" height="16" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.75291 13.8242L8.5 11.6142L12.2471 13.8477L11.2447 9.66284L14.5383 6.84157L10.1945
               6.4654L8.5 2.51563L6.80546 6.44189L2.46169 6.81806L5.75531 9.63933L4.75291 13.8242ZM8.5 13.26L4.06077
                15.8931C3.93348 15.9715 3.79823 16.0068 3.65503 15.9989C3.51183 15.9911 3.38454 15.948 3.27316
                 15.8696C3.16179 15.7913 3.07825 15.6894 3.02256 15.564C2.96687 15.4386 2.95494 15.2975 2.98676
                  15.1408L4.15624 10.1566L0.242078 6.79455C0.114788 6.68483 0.0392098 6.56336 0.0153429
                   6.43014C-0.00852388 6.29691 -0.00454603 6.1676 0.0272764 6.04221C0.0590988 5.91682 0.130699
                    5.81103 0.242078 5.72482C0.353456 5.63861 0.488702 5.58768 0.647814 5.572L5.82691 5.1253L7.83173
                     0.42319C7.89537 0.282126 7.99084 0.176329 8.11813 0.105797C8.24542 0.0352656 8.37271 0 8.5
                      0C8.62729 0 8.75458 0.0352656 8.88187 0.105797C9.00916 0.176329 9.10462 0.282126 9.16827
                       0.42319L11.1731 5.1253L16.3522 5.572C16.5113 5.58768 16.6465 5.63861 16.7579 5.72482C16.8693
                        5.81103 16.9409 5.91682 16.9727 6.04221C17.0045 6.1676 17.0085 6.29691 16.9847 6.43014C16.9608
                         6.56336 16.8852 6.68483 16.7579 6.79455L12.8438 10.1566L14.0132 15.1408C14.0451 15.2975
                          14.0331 15.4386 13.9774 15.564C13.9217 15.6894 13.8382 15.7913 13.7268 15.8696C13.6155
                           15.948 13.4882 15.9911 13.345 15.9989C13.2018 16.0068 13.0665 15.9715 12.9392 15.8931L8.5
                            13.26Z" fill="#B3FF66"/>
            </svg>
<!--            <rating-block></rating-block> а тут будет блок с рейтингом, открывающийся по нажатию на рейтинг-->
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
</template>

<script>
import buttonBuy from "@/components/UI/buttons/button-buy.vue";
import axios from 'axios'
import RatingBlock from "@/components/sections/rating-block.vue";

export default {
  data() {
    return {
      book: [],
      genres: [],
      tags: []
    }
  },
  async mounted() {
    let url = window.location.pathname
    await axios
        .get(`http://127.0.0.1:3000/api${url}`)
        .then((response) => {
          this.book = response.data[0]
        })
    await axios
        .get(`http://127.0.0.1:3000/api/genre${url}`)
        .then((response) => {
          this.genres = response.data
          console.log(response.data)
        })
    await axios
        .get(`http://127.0.0.1:3000/api/tags${url}`)
        .then((response) => {
          this.tags = response.data
          console.log(response.data)
        })
  },
  methods: {
    downloadBook() {
      // console.log('Загружаю книгу')
      // axios
      //     .get(`http://127.0.0.1:3000/book/get`)
    },

  },
  components: {
    RatingBlock,
    buttonBuy
  },
  name: "book"
}


</script>

<style scoped>
body {
  background: #404040;
}
.block-1 {
  display: flex;
  height: 100vh;
  padding-left: 100px;
  padding-right: 100px;
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
    font-size: 24px;
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