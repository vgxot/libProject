<template>
  <div class="block-0"></div>
    <div class="block-1">
      <div class="block-book">
        <div class="book-block-image">
          <img class="book-image" src="@/../images/img/imageBook2024.jpg">
        </div>
        <div class="book-about">
          <div class="book-title">Название книги длинное очень длинное название книги</div>
          <div class="book-author">Автор Книги</div>
          <div class="book-rating">
            <p>4,9</p>
            <svg class="rating-star-svg" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.75291 13.8242L8.5 11.6142L12.2471 13.8477L11.2447 9.66284L14.5383 6.84157L10.1945 6.4654L8.5 2.51563L6.80546 6.44189L2.46169 6.81806L5.75531 9.63933L4.75291 13.8242ZM8.5 13.26L4.06077 15.8931C3.93348 15.9715 3.79823 16.0068 3.65503 15.9989C3.51183 15.9911 3.38454 15.948 3.27316 15.8696C3.16179 15.7913 3.07825 15.6894 3.02256 15.564C2.96687 15.4386 2.95494 15.2975 2.98676 15.1408L4.15624 10.1566L0.242078 6.79455C0.114788 6.68483 0.0392098 6.56336 0.0153429 6.43014C-0.00852388 6.29691 -0.00454603 6.1676 0.0272764 6.04221C0.0590988 5.91682 0.130699 5.81103 0.242078 5.72482C0.353456 5.63861 0.488702 5.58768 0.647814 5.572L5.82691 5.1253L7.83173 0.42319C7.89537 0.282126 7.99084 0.176329 8.11813 0.105797C8.24542 0.0352656 8.37271 0 8.5 0C8.62729 0 8.75458 0.0352656 8.88187 0.105797C9.00916 0.176329 9.10462 0.282126 9.16827 0.42319L11.1731 5.1253L16.3522 5.572C16.5113 5.58768 16.6465 5.63861 16.7579 5.72482C16.8693 5.81103 16.9409 5.91682 16.9727 6.04221C17.0045 6.1676 17.0085 6.29691 16.9847 6.43014C16.9608 6.56336 16.8852 6.68483 16.7579 6.79455L12.8438 10.1566L14.0132 15.1408C14.0451 15.2975 14.0331 15.4386 13.9774 15.564C13.9217 15.6894 13.8382 15.7913 13.7268 15.8696C13.6155 15.948 13.4882 15.9911 13.345 15.9989C13.2018 16.0068 13.0665 15.9715 12.9392 15.8931L8.5 13.26Z" fill="#B3FF66"/>
            </svg>
          </div>
          <button-buy class="book-get">Скачать</button-buy>
          <div class="book-description">Описание
            <div class="book-description-text">Эдит Ева Эгер в юном возрасте была отправлена вместе со своей семьей в Аушвиц. Там ее родители погибли в газовой камере, а Эдит и ее сестра испытали на себе все ужасы отвратительных лагерей смерти. Через 35 лет после окончания войны, став известным психологом, Эдит вернулась в Аушвиц, чтобы избавиться от воспоминаний о прошлом и вины выжившего.
              <br>Эта книга не просто мемуары пережившего холокост человека, это незабываемые хроники героизма и стойкости, милосердия и исцеления. Она показывает, что мы всегда можем выбирать, чему нас учит жизнь и как относиться к происходящему.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-block">
      <div class="about-block-additional">
        <div class="block-additional">
          <p class="additional-text">Дополнительная информация</p>
        </div>
      </div>
      <div class="genre-block">
        <div class="genre"></div>
        <div class="tags"></div>
      </div>

    </div>
</template>

<script>
import buttonBuy from "@/UI/button-buy.vue";
import axios from 'axios'
axios({
  method: 'delete',
  url: '/user/',
  data: {
    username: ""
  }
});
export default {
  components: {
    buttonBuy
  },
  name: "book"
}


</script>

<style>
body {
  background: #404040;
}

.block-1 {
  display: flex;
  height: 100vh;
  padding-left: 100px;
  padding-right: 100px;
  background-color: #1e1e1e;
}
.block-book {
  display: flex;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
}
.book-block-image {
  position: relative;
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
}
.book-description {
  margin-top: 5px;
  font-size: 24px;
}
.book-description-text {
  margin-top: 15px;
  font-size: 18px;
}
.about-block {
  padding: 0 100px;
  display: flex;
  height: 500px;
}
.about-block-additional {
  height: 300px;
  width: 100%;

}
.block-additional {
  background-color: #1E1E1E;
  width: 600px;
  height: 250px;
  border-radius: 35px;
  padding: 15px;
}
.additional-text {
  font-size: 20px;
  color: white;
  text-align: center;

}
.genre-block {
  height: 300px;
  width: 100%;
  background-color: #e1e1e1;
}

.genre {

}
.tags {

}
</style>