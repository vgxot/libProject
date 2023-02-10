<template>
  <my-header></my-header>
  <my-footer></my-footer>
</template>

<script>
import myHeader from "./UI/header.vue"
import myFooter from "./UI/footer.vue"
export default {
    components: {
      myHeader, myFooter
    },
    name: "App"
}
</script>

<style>
body, h1, h2, h3, h4, p, a {
  margin: 0;
  font-size: 100%;
  font-weight: normal;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
}
body {
  background-color: #ffffff;
}
button {
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  margin: 0;
  border: 0;
}
::selection {
  background: rgba(170, 255, 0, 0.38);
}
@font-face {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/Nunito-VariableFont_wght.ttf")
}
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/Raleway-VariableFont_wght.ttf")
}
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/Montserrat-VariableFont_wght.ttf")
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/Inter-VariableFont_slnt,wght.ttf")
}
</style>