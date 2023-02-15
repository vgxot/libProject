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
  height: 50px;
  position: relative;
  border-radius: 21px;
  background-color: rgb(30, 30, 30);;
  color: white;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  border: 4px solid #1e1e1e;
  transition: background-color 350ms ease-in-out,color 350ms ease-in-out;
  z-index: 1;
  font-family: Nunito, sans-serif;
}
.button:hover {
  background-color: rgb(64, 64, 64);
  color: #ffffff;
  border: 4px solid #1e1e1e;
  transition: background-color 350ms ease-in-out,color 350ms ease-in-out;
}
</style>