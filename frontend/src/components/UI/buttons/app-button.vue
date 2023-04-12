<script setup>

</script>

<template>
  <div class="app-button">
    <slot/>
  </div>
</template>

<style scoped>
.app-button {
  border-radius: 20px;
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  transition: background-color 200ms ease-in-out,color 350ms ease-in-out;
  text-decoration: none;
  height: max-content;
  width: max-content;
  font-size: 24px;
  padding: 10px 20px;
  z-index: 1;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

.app-button:hover {
  background-color: #313131;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
}
</style>