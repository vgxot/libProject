<template>
  <div class="button-block">
    <my-button class="button-choice">30</my-button>
    <my-button class="button-choice">50</my-button>
    <my-button class="button-choice">100</my-button>
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
  margin: 0 15px;
  background-color: #1E1E1E;
  width: max-content;
  border-radius: 17px;
  border: 4px solid #1E1E1E;
}
.button-choice {
  width: 90px;
  height: 40px;
  border-radius: 13px;
}
.button-choice:hover {
  background-color: #1E1E1E;
}
.button-choice:active {
  background-color: #303030;
}
</style>