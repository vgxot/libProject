<script setup>
import {ref} from "vue";

let show = ref(false)
setTimeout(() => {
  show.value = true
}, 1500)
</script>

<template>
  <div class="footer-block">
    <div class="footer">
      <img class="footer-block-logo" src="@/assets/buttons/library-mini-logo-white.svg" alt="logo">
      <div class="footer-link-group">
        <router-link class="footer-link fs-24" to="/statistics">Статистика сайта</router-link>
        <router-link class="footer-link fs-24" to="/map">Карта сайта</router-link>
        <router-link class="footer-link fs-24" to="/help">Помощь</router-link>
      </div>
      <div class="footer-copyright">© 2023 Library</div>
    </div>
  </div>
</template>

<style scoped>
.footer {                                    /* блок подвала */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #bababa;
  padding: 50px 50px 20px 50px;
  line-height: 32px;
  user-select: none;
  background-color: #1e1e1e;
  font-family: Inter, sans-serif;
  border-top-left-radius: 75px;
  border-top-right-radius: 75px;
  text-align: center;
}
.footer-block-logo {                            /* лого */
  width: 95px;
}
.footer-link-group {                            /* группа ссылок */
  display: flex;
  flex-direction: column;
  margin: 50px;
}
.footer-link {                                  /* ссылки */
  color: #bababa;
  margin-bottom: 10px;
  transition: color 250ms;
}
.footer-link:hover {
  transition: color 250ms;
  color: #f5f5f5;
}
.footer-copyright {                             /* копирайт */
  position: relative;
  margin-top: 35px;
  width: 150px;
}
@media only screen and (max-width: 734px) {
  .footer {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 50px 20px 20px 20px;
  }
  .footer-copyright {
    margin-top: 35px;
  }
  .footer-block-logo {
    width: 72px;
  }
  .footer-link {
    font-size: 20px;
  }
}
</style>