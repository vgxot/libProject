<template>
  <div class="pop-up-block">
    <slot/>
  </div>
</template>
<script setup>
</script>

<style scoped>
.pop-up-block {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 400px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  background-color: #1e1e1e;
  z-index: 2;
  border-radius: 25px;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
}
</style>