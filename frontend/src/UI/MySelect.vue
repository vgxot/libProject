<template>
  <select class="select-block">
    <option disabled value="">Популярности</option>
    <option disabled value="">Дате написания</option>
    <option disabled value="">Количеству страниц</option>
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

</style>