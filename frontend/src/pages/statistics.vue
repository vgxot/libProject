<template>
  <div class="title">
    <h1 class="title-text text">Статистика</h1>
  </div>
  <div class="stat">
    <stat-item
        v-for="stat in stats"
        :key="stat.value"
        v-bind:stat="stat">
    </stat-item>
  </div>
  <div class="bottom">
    <p class="actual-text text">Данные актуальны на<br>
      <span class="datetime">{{ datetime }}</span></p>
  </div>
</template>

<script>
import MyFooter from "@/UI/footer.vue";
import axios from "axios";
import StatItem from "@/UI/stat-item.vue";

export default {
  data() {
    let datetime = '';
    return {
      datetime,
      stats: []
    }
  },
  mounted() {
    axios
        .get('http://127.0.0.1:3000/api/statistics')
        .then((response) => {
          this.stats = response.data;
          console.log(response.data)
        })
    axios
        .get('http://127.0.0.1:3000/api/datetime')
        .then((response) => {
          this.datetime = response.data;
        })
  },
  methods: {
  },
  name: "statistics",
  components: {StatItem, MyFooter},
}
</script>

<style scoped>
.text {
  text-align: center;
  color: white;
}
.title {
  padding-top: 70px;
  margin: 0 auto;
}
.title-text {
  font-size: 48px;
}
.actual-text {
  color: #dadada;
  font-size: 24px;
}
.datetime {
}
.stat {
  margin: 0 75px;
  display: flex;
  flex-wrap: wrap;
}
</style>