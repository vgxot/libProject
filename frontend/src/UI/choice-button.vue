<template>
  <div class="button-block">
    <my-button class="button">30</my-button>
    <my-button class="button">50</my-button>
    <my-button class="button">100</my-button>
  </div>
</template>

<script>
import MyButton from "@/UI/button.vue";

export default {
  name: "choice-button",
  components: {MyButton}
}
</script>

<style scoped>
.button-block {
  margin: 35px;
  background-color: #1E1E1E;
  width: max-content;
  border-radius: 17px;
  border: 4px solid #1E1E1E;
}
.button {
  width: 100px;
  height: 40px;
  border-radius: 13px;
}
.button:hover {
  background-color: #1E1E1E;
}
.button:active {
  background-color: #303030;
}
</style>