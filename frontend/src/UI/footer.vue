<template>
  <div class="footer">
    <div class="footer-block-logo">
    </div>
    <div class="footer-link-group">
      <router-link class="footer-link" to="/statistics">Статистика сайта</router-link>
      <router-link class="footer-link" to="/map">Карта сайта</router-link>
      <router-link class="footer-link" to="/help">Помощь</router-link>
    </div>
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
@media only screen and (max-width: 734px) {
.footer {
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 50px 20px 20px 20px;
}
.footer-copyright {
  margin-top: 75px;
}
}
</style>