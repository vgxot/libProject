<template>
  <div class="user-item">
    <div class="user-avatar">
      <img class="avatar-img" :src="'http://127.0.0.1:3000/img/user/' + user_data.avatar_link">
    </div>
    <div class="user-info">
      <router-link class="username text" :to="{ name: 'user', params: { id: user_data.username } }">{{user_data.username}}</router-link>
      <div class="role text">{{user_data.role}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-item",
  props: {
    user_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
  }
}
</script>

<style scoped>
.user-item {
  color: white;
  display: flex;
  background-color: #1E1E1E;
  border-radius: 45px;
  margin: 10px;
  height: 128px;
}
.user-avatar {

}
.avatar-img {
  border-radius: 45px;
  width: 128px;
  height: 128px;
}
.user-info {
  padding: 20px 25px;
}
.username {
  font-size: 24px;
  transition: color 150ms ease-in-out;
}
.username:hover {
  color: #dadada;
  transition: color 150ms ease-in-out;
}
.role {
  text-align: center;
  float: bottom;
}
.gradient {
  -webkit-background-clip: text;
}
.pro {
  background-image: linear-gradient(90deg,#ccefff,#60cafc 40%,#3D71FF);
}
.max {
  background-image: linear-gradient(90deg,#e1cdff,#ad68ff 40%,#9d4dff);
}
.ultra {
background-image: linear-gradient(var(--chip-gradient-angle),#FBF4EC var(--ultra-gradient-stop-1),#ECD7C8 var(--ultra-gradient-stop-2),#EEA4BC var(--ultra-gradient-stop-3),#BE88C4 var(--ultra-gradient-stop-4),#9186E7 var(--ultra-gradient-stop-5),#92C9F9 var(--ultra-gradient-stop-6),#C7F8FF var(--ultra-gradient-stop-7))
}
.ultra-stop-list {
  --chip-gradient-angle: 90deg;
  --ultra-gradient-stop-1: 10%;
  --ultra-gradient-stop-2: 23.3%;
  --ultra-gradient-stop-3: 36.6%;
  --ultra-gradient-stop-4: 49.9%;
  --ultra-gradient-stop-5: 63.2%;
  --ultra-gradient-stop-6: 76.5%;
  --ultra-gradient-stop-7: 90%;
}
</style>