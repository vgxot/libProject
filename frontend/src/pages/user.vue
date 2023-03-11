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
      <div v-for="rating in ratings">
        <book-item></book-item>
      </div>
      <div v-for="rating in ratings">{{rating.rating}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BookItem from "@/UI/book-item.vue";
export default {
  components: {BookItem},
  data() {
    return {
      user: [],
      ratings: []
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
  display: flex;
  flex-direction: column;
  height: 1000px;
  padding: 25px 150px;
  background-color: #bababa;
}
</style>