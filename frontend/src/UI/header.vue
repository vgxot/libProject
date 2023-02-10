<template>
  <div id="menu">
    <div class="top-menu">
      <router-link class="top-menu-link" to="/">Главная</router-link>
      <router-link class="top-menu-link" to="/books">Каталог</router-link>
      <router-link class="top-menu-link" to="/forum">Форум</router-link>
      <router-link class="top-menu-link" to="/news">Новости</router-link>
      <router-link class="top-menu-link" to="/account">Аккаунт</router-link>
    </div>
    <div id="top-menu-m" class="top-menu-mobile">
      <button id="top-btn" class="top-menu-mobile-link">
        <img id="top-btn-img" class="img-menu" src="../../buttons/menu-open.svg">
      </button>
      <router-link class="top-menu-mobile-link img-main" to="/"></router-link>
      <router-link class="top-menu-mobile-link img-account" to="@/account"></router-link>
    </div>
    <div id="top-menu" class="anim">
      <div id="top-menu-block" class="top-menu-mobile-block">
        <router-link class="top-menu-mobile-block-link" to="/books">Каталог</router-link>
        <router-link class="top-menu-mobile-block-link" to="/forum">Форум</router-link>
        <router-link class="top-menu-mobile-block-link" to="/news">Новости</router-link>
        <router-link class="top-menu-mobile-block-link" to="/account">Аккаунт</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "my-header"
}
</script>

<style scoped>
/* верхнее меню */

.top-menu{
  margin-left: 0;
  margin-right: 0;
  justify-content: center;
  text-align: center;
  height: 60px;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.27);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 10;
}
.top-menu-link{
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 1.4em;
  margin-left: 25px;
  line-height: 60px;
  font-family: Nunito, sans-serif;
  transition: 150ms ease-in;
}
.top-menu-link:hover{
  color: rgba(255, 255, 255, 0.59);
  transition: 150ms ease-in;
}

/* mobile верхнее меню */

.top-menu-mobile{
  display: none;
  height: 48px;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.27);
  backdrop-filter: blur(5px);
  z-index: 13;
}


/*  */


.top-menu-mobile-link {
  background-size: cover;
}
.img-menu {
  position: absolute;
  left: max(0px,env(safe-area-inset-left));
  top: 15px;
  background-color: rgba(0, 255, 255, 0);
  width: 32px;
  height: 32px;
  filter: invert(1);
  margin-left: 35px;
}
.button-open {
  background-image: url("/buttons/menu-open.svg");
}
.button-close {
  background-image: url("/buttons/menu-close.svg");
}
.img-main {
  background-image: url("/buttons/library-mini-logo-white.svg");
  position: absolute;
  width: 32px;
  height: 32px;
  left: 50%;
  top: 15px;
  margin-left: -24px;
  text-align: center;
}
.img-account {
  width: 32px;
  height: 32px;
  position: absolute;
  right:  max(0px,env(safe-area-inset-left));
  background-image: url("/buttons/account_circle_FILL0_wght400_GRAD0_opsz48.svg");
  filter: invert(1);
  margin-right: 35px;
  top: 15px;
}

/* меню при нажатии на кнопку */

.open {                                 /* блок выпадающего меню */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
  width: 100%;
  height: 100%;
}
.open-block {
  display: block;
}
.top-menu-mobile-block {            /* блок с текстом в меню */
  position: absolute;
  margin-top: 200px;
  display: none;
  width: 300px;
  height: auto;
  z-index: 12;
}
.top-menu-mobile-block-link {           /* ссылки в меню */
  position: relative;
  width: 200px;
  height: 50px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  line-height: 60px;
  font-family: Nunito, sans-serif;
  font-size: 36px;
  margin-left: 50px;
  top: 75px;
}
.open-block {                           /* добавляемый класс, который открывает меню */
  display: block;
}
@media only screen and (max-width: 734px) {
  .top-menu {
    display: none;
  }

  .top-menu-mobile {
    display: block;
    height: 62px;
  }

  .top-menu.open {

  }

  .block-button { /* анимация кнопки на смартфонах */
    transition: background-color 150ms ease-in-out, color 150ms ease-in-out;
  }

  .block-button:hover {
    transition: background-color 150ms ease-in-out, color 150ms ease-in-out;
  }

  .open {
    display: block;
    transform: translateY(-150%);
    animation: ani 500ms forwards;
  }

  .top-menu-mobile-block {
    transform: translateY(-150%);
    animation: ani 750ms forwards;
  }

  @keyframes ani {
    0% {
      transform: translateY(-150%);
    }
    100% {
      transform: translateY(0);
    }
  }
  .img-menu, .top-menu-mobile-link {
    transition: src 100ms ease-in-out, color 1500ms ease-in-out;
  }

  .none-blur {
    transition: background-color 120ms cubic-bezier(1, 0, 1, 0);
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>