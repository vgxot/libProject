<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
.button {
  text-decoration: none;
  height: 50px;
  width: 150px;
  position: relative;
  border-radius: 20px;
  background-color: #1e1e1e;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  padding: 0 15px;
  font-family: Nunito, sans-serif;
  transition: background-color 200ms ease-in-out,color 350ms ease-in-out;
  backdrop-filter: blur(10px);
  z-index: 1;
}
.button:hover {
  color: #f5f5f5;
  background-color: rgba(0, 0, 0, 0.55);
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
}
</style>