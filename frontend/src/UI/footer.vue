<template>
  <div class="footer">
    <div class="footer-block-logo">
    </div>
    <div class="footer-link-group">
      <a class="footer-link" href="../../statistics.html">Статистика сайта</a>
      <a class="footer-link" href="../../library-map.html">Карта сайта</a>
      <router-link class="footer-link" to="/help">Помощь</router-link>
    </div>
    <a class="sk-link" href="https://sk.ru"></a>
    <div class="footer-copyright">© 2023 Library</div>
  </div>
</template>

<script>
export default {
name: "my-footer"
}
</script>

<style scoped>
/* подвал */
body, h1, h2, h3, h4, p, a {
  margin: 0;
  font-size: 100%;
  font-weight: normal;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
}
.footer {                                    /* блок подвала */
  color: #bababa;
  padding: 50px 50px 20px 50px;
  line-height: 32px;
  user-select: none;
  text-align: left;
  background-color: #1e1e1e;
  font-family: Inter, sans-serif;
  border-top-left-radius: 75px;
  border-top-right-radius: 75px;
}
.footer-block-logo {                            /* лого */
  margin-left: auto;
  margin-right: auto;
  width: 75px;
  height: 70px;
  background-image: url("/buttons/library-mini-logo-white.svg");
  background-size: 75px;
}
.footer-link-group {                            /* группа ссылок */
  display: flex;
  flex-direction: column;
  margin: 50px;
}
.footer-link {                                  /* ссылки */
  color: #bababa;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  margin-bottom: 10px;
  transition: color 250ms;
}
.footer-link:hover {
  transition: color 250ms;
  color: #f5f5f5;
}
.footer-copyright {                             /* копирайт */
  position: relative;
  margin-top: 75px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
}
.sk-link{                                       /* ссылка на Сколково */
  background-image: url("/buttons/sk.svg");
  position: relative;
  float: right;
  background-size: cover;
  width: 77px;
  height: 55px;
  margin-right: 25px;
}
@media only screen and (max-width: 734px) {
.footer {
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 50px 20px 20px 20px;
}
.footer-copyright {
  margin-top: 75px;
}
.sk-link {
  margin-right: 0;
}
}
</style>