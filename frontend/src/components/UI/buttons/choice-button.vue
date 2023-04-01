<template>
  <div class="button-block">
    <app-button class="button-choice">30</app-button>
    <app-button class="button-choice">50</app-button>
    <app-button class="button-choice">100</app-button>
  </div>
</template>

<script>
import AppButton from "@/components/UI/buttons/app-button.vue";

export default {
  name: "choice-button",
  components: {AppButton}
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