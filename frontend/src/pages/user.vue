<template>
  <div class="user">
    <div class="block-1">
      <div class="user-header">
        <div class="background-block">
          <img class="background-img" :src="'http://127.0.0.1:3000/img/background/' + user.background_link">
        </div>
        <div class="user-info-block">
          <div class="info-flex-block">
            <img class="user-img" :src="'http://127.0.0.1:3000/img/user/' + user.avatar_link">
            <p class="username text">{{user.username}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block-0"></div>
    <div class="block-2">
      <div class="block-2-title">Оценки пользователя:</div>
      <div class="block-2-for-rating">
        <book-item-rating class="aaa"
            v-for="rating in ratings"
            :key="ratings.book_id"
            v-bind:ratings_data="rating">
        </book-item-rating>
      </div>
      <div class="block-2-for-book-name">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BookItem from "@/UI/book-item.vue";
import BookItemRating from "@/UI/book-item-rating.vue";
export default {
  components: {BookItemRating, BookItem},
  data() {
    return {
      user: [],
      ratings: [],
    }
  },
  async mounted() {
    let url = window.location.pathname
    await axios
        .get(`http://127.0.0.1:3000/api${url}`)
        .then((response) => {
          this.user = response.data[0]
          console.log(`http://127.0.0.1:3000/api${url}`)
        })
    await axios
        .get(`http://127.0.0.1:3000/api/ratings${url}`)
        .then((response) => {
          this.ratings = response.data
          console.log(response.data)
        })
  },
  name: "user"
}
</script>

<style scoped>
.user {
  background-color: #dadada;
}
.block-0 {
  width: 100%;
  height: 115px;
  background-color: #bababa;
}
.block-1 {
  height: max-content;
}
.user-header {
}

.background-block {
  height: 350px;
}
.background-img {
  position: absolute;
  width: 100%;
  height: 350px;
  object-fit: cover;
/*  pointer-events: none;*/
}
.user-img {
  width: 250px;
  border-radius: 35px;
  margin: 0 auto 20px;
}
.user-info-block {
  position: absolute;
  top: 240px;
  left: 0;
  right: 0;
  width: 60%;
  background-color: white;
  height: 225px;
  border-radius: 50px;
  margin: 0 auto;
}
.info-flex-block {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}
.text {
}
.username {
  display: inline-block;
  width: max-content;
  font-size: 40px;
  margin: 0 auto;
}
.block-2 {
  height: max-content;
  padding: 25px 75px;
  background-color: #bababa;
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
</style>