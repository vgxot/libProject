<template>
  <div class="stat-item">
    <div class="stat-block">
      <div class="stat-title a">{{ stat.name }}</div>
      <div class="stat-value a">{{ stat.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stat-item",
  props: {
    stat: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.stat-block {
  width: max-content;
  height: max-content;
  padding: 15px 25px;
  background-color: #1E1E1E;
  border-radius: 25px;
  margin: 10px;
}
.stat-title {
  color: white;
  font-size: 36px;
}
.stat-value {
  font-size: 64px;
  font-weight: bold;
  background-image: linear-gradient(90deg, #d0b1fa,#ad68ff 40%,#9d4dff);
  -webkit-background-clip: text;
  color: rgba(255, 255, 255, 0);
  width: max-content;
}
.a {
  margin: 0 auto;
  text-align: center;
}
</style>