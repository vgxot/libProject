<template>
  <div class="book-item">
    <div class="book-image">
      <img class="book-image-img" :src="'http://127.0.0.1:3000/img/book/min/' + book_data.photo_link" alt="">
    </div>
    <div class="book-about">
      <router-link class="book-name text" :to="{ name: 'book', params: { id: book_data.book_id } }">{{book_data.book_name}}</router-link>
      <div class="book-author text">{{book_data.author}}</div>
      <div class="rating-block">
        <div class="book-rating text">{{book_data.rating}}</div>
        <svg class="rating-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75291 13.8242L8.5 11.6142L12.2471 13.8477L11.2447 9.66284L14.5383 6.84157L10.1945 6.4654L8.5 2.51563L6.80546 6.44189L2.46169 6.81806L5.75531 9.63933L4.75291 13.8242ZM8.5 13.26L4.06077 15.8931C3.93348 15.9715 3.79823 16.0068 3.65503 15.9989C3.51183 15.9911 3.38454 15.948 3.27316 15.8696C3.16179 15.7913 3.07825 15.6894 3.02256 15.564C2.96687 15.4386 2.95494 15.2975 2.98676 15.1408L4.15624 10.1566L0.242078 6.79455C0.114788 6.68483 0.0392098 6.56336 0.0153429 6.43014C-0.00852388 6.29691 -0.00454603 6.1676 0.0272764 6.04221C0.0590988 5.91682 0.130699 5.81103 0.242078 5.72482C0.353456 5.63861 0.488702 5.58768 0.647814 5.572L5.82691 5.1253L7.83173 0.42319C7.89537 0.282126 7.99084 0.176329 8.11813 0.105797C8.24542 0.0352656 8.37271 0 8.5 0C8.62729 0 8.75458 0.0352656 8.88187 0.105797C9.00916 0.176329 9.10462 0.282126 9.16827 0.42319L11.1731 5.1253L16.3522 5.572C16.5113 5.58768 16.6465 5.63861 16.7579 5.72482C16.8693 5.81103 16.9409 5.91682 16.9727 6.04221C17.0045 6.1676 17.0085 6.29691 16.9847 6.43014C16.9608 6.56336 16.8852 6.68483 16.7579 6.79455L12.8438 10.1566L14.0132 15.1408C14.0451 15.2975 14.0331 15.4386 13.9774 15.564C13.9217 15.6894 13.8382 15.7913 13.7268 15.8696C13.6155 15.948 13.4882 15.9911 13.345 15.9989C13.2018 16.0068 13.0665 15.9715 12.9392 15.8931L8.5 13.26Z" fill="#B3FF66"/>
        </svg>
      </div>
      <div class="book-pages text">{{book_data.pages}} страниц</div>
      <div class="book-year text">{{book_data.year}}</div>
      <div class="book-age text">{{book_data.age}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "book-item",
  props: {
    book_data: {
      type: Object,
      default() {
        return {}
    }
  }
},
  data() {
  return {

    }
  },
  computed: {
  }
}
</script>

<style scoped>
.book-item {
  display: flex;
  width: 400px;
  padding: 35px;
  background-color: #1e1e1e;
  border-radius: 35px;
  margin: 15px;
}
.book-image {
}
.book-image-img {
  height: 250px;
  margin-right: 25px;
}
.text {
  color: white;
  font-size: 16px;
}
.book-about {
  display: inline-block;
  max-width: 200px;
  float: left;
  line-height: 19px;
}
.book-name {
  font-size: 22px;
  line-height: 100%;
  transition: color 150ms ease-in-out;
}
.book-name:hover {
  color: #dadada;
  transition: color 150ms ease-in-out;
}
.book-author {
  font-size: 18px;
  margin-top: 7px;
}
.rating-block {
  display: flex;
}
.book-rating {
  margin-top: 7px;
  margin-bottom: 7px;
  color: #B3FF66;
  font-size: 19px;
}
.rating-star {
  margin-top: 7px;
  margin-bottom: 7px;
  height: 16px;
  width: 17px;
  margin-left: 5px;
}
.book-pages {

}
.book-year {

}
.book-age {

}
@media only screen and (max-width: 734px) {
  .book-item {
    display: flex;
    width: 330px;
    padding: 0;
    margin: 10px auto 25px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 35px;
  }
  .book-image {

  }
  .book-image-img {
    height: 180px;
    margin-right: 25px;
  }
  .text {
    color: white;
    font-size: 13px;
  }
  .book-about {
    display: inline-block;
    float: left;
    line-height: 19px;
  }
  .book-name {
    font-size: 18px;
    line-height: 120%;
  }
  .book-author {
    font-size: 15px;
    margin-top: 7px;
  }
  .book-pages {
    margin-top: 5px;
  }
  .book-year {

  }
  .book-age {

  }
}
</style>