<script setup>

</script>

<template>
  <div class="ratings">
    <div class="ratings-title fz-32">Рейтинг</div>
    <div class="ratings-marks">
      <div class="stars"></div>
      <div class="marks">
        <div class="mark text">{{five}}</div>
        <div class="mark text">{{four}}</div>
        <div class="mark text">{{three}}</div>
        <div class="mark text">{{two}}</div>
        <div class="mark text">{{one}}</div>
      </div>
    </div>
    <div class="ratings-action">
      <div class="action-title">Оцените книгу:</div>
      <div class="action-buttons">

      </div>
    </div>
  </div>
</template>

<style scoped>
  .ratings {
    width: max-content;
    height: max-content;
    padding: 35px;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
  }
  .ratings-title {

  }
  .ratings-marks {
    display: flex;
    flex-direction: row;
  }
</style>