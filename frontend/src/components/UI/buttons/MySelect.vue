<template>
  <select class="select-block">
    <option class="option" disabled value="">Популярности</option>
    <option class="option" disabled value="">Дате написания</option>
    <option class="option" disabled value="">Количеству страниц</option>
  </select>
</template>

<script>
export default {
  name: "my-select"
}
</script>

<style scoped>
.select-block {
  font-family: "Nunito", sans-serif;
  background: #1e1e1e;
  margin-top: 50px;
  border-radius: 17px;
  width: 250px;
  height: 60px;
}
.option {
  background-color: #1E1E1E;
  padding: 5px;
  border: 0;
  color: white;
}
</style>