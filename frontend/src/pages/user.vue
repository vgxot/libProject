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
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: []
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
  },
  name: "user"
}
</script>

<style scoped>
.user {
  background-color: #dadada;
}
.block-1 {
}
.user-header {
  display: flex;
  flex-direction: column;
}

.background-block {
  height: 300px;
}
.background-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
/*  pointer-events: none;*/
}
.user-img {
  width: 200px;
  border-radius: 35px;
  margin: 0 auto;
}
.user-info-block {
  width: 60%;
  background-color: white;
  height: 200px;
  border-radius: 50px;
  margin: 0 auto;
}
.info-flex-block {
  position: relative;
  bottom: 100px;
  display: flex;
  flex-direction: column;
}
.text {
}
.username {
  display: inline-block;
  width: max-content;
  font-size: 36px;
  margin: 0 auto;
}
</style>