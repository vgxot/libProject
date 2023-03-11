<template>
  <div id="menu">
      <div class="top-menu">
        <router-link class="top-menu-link" to="/">Главная</router-link>
        <router-link class="top-menu-link" to="/books">Каталог</router-link>
        <router-link class="top-menu-link" to="/users">Форум</router-link>
        <router-link class="top-menu-link" to="/news">Новости</router-link>
        <router-link class="top-menu-link" to="/auth">Аккаунт</router-link>
      </div>
      <div id="top-menu-m" class="top-menu-mobile">
        <button id="top-btn" @click="open = !open" class="top-menu-mobile-link">
          <img id="top-btn-img" class="img-menu" src="@/../buttons/menu-open.svg" alt="">
        </button>
        <router-link class="top-menu-mobile-link img-main" to="/"></router-link>
        <router-link class="top-menu-mobile-link img-account" to="@/account"></router-link>
      </div>
    <transition name="menu-block">
      <div v-if="open" class="mobile-menu-block">
        <router-link class="menu-block-link" @click="open =!open" to="/">Главная</router-link>
        <router-link class="menu-block-link" @click="open =!open" to="/books">Каталог</router-link>
        <router-link class="menu-block-link" @click="open =!open" to="/users">Форум</router-link>
        <router-link class="menu-block-link" @click="open =!open" to="/news">Новости</router-link>
        <router-link class="menu-block-link" @click="open =!open" to="/auth">Аккаунт</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
  },
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

/*  */
.top-menu-mobile {
  display: none;
  height: 48px;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.27);
  backdrop-filter: blur(5px);
  z-index: 13;
}
.top-menu-mobile-link {
  background-size: cover;
}
.mobile-menu-block {
  display: flex;
  flex-direction: column;
  position: fixed;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
  width: 100%;
  height: 100%;
}
.menu-block-link {
  font-size: 36px;
  margin: 0 0 10px 0;
  color: white;
}
.menu-block-enter-active {
  transition: all 750ms cubic-bezier(0, 1, .15, 1);
}
.menu-block-leave-active {
  transition: all 400ms ease-out;
}
.menu-block-enter-from,
.menu-block-leave-to {
  opacity: 0;
  transform: translateY(-150%);
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

}
@media only screen and (max-width: 734px) {
  .top-menu {
    display: none;
    flex-direction: column;
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
  .top-menu-link {
    margin: 0 0 10px 0;
    font-size: 36px;
  }
  .top-menu.open {
    display: flex;
  }
  .top-menu-mobile {
    display: block;
    height: 62px;
  }
  .top-menu-mobile.open {
    height: 0;
  }
}
</style>