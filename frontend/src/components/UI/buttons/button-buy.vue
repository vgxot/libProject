<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button-buy"
}
</script>

<style scoped>
.button{
  text-decoration: none;
  height: 55px;
  position: relative;
  border-radius: 21px;
  background-color: rgb(30, 30, 30);
  color: white;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  border: 2px solid #B3FF66;
  transition: background-color 350ms ease-in-out,color 350ms ease-in-out;
  z-index: 1;
  font-family: Nunito, sans-serif;
}
.button:hover {
  background-color: #1E1E1E;
  color: #ffffff;
  border: 2px solid #B3FF66;
  transition: background-color 350ms ease-in-out,color 350ms ease-in-out;
}
</style>