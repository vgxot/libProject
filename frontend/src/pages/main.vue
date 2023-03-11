<template>
  <div class="main">
    <h1 class="block-1-text">Welcome to the<br>Library</h1>
    <div class="block-1">
    </div>
    <div class="block-2 white">
      <svg class="kav" width="83" height="65" viewBox="0 0 83 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 4.44643C15.5 1.84643 17.55 0.396429 19.65 0.0964285C21.75 -0.203572 23.55 0.196429 25.05 1.29643C26.55 2.39643 27.4 4.04643 27.6 6.24643C27.8 8.44643 26.9 10.8464 24.9 13.4464C21.7 17.6464 19.45 21.8964 18.15 26.1964C16.85 30.4964 16.2 34.4464 16.2 38.0464L15.3 32.0464C20.5 32.0464 24.7 33.4964 27.9 36.3964C31.1 39.2964 32.7 43.2464 32.7 48.2464C32.7 53.0464 31.2 56.9964 28.2 60.0964C25.2 63.1964 21.3 64.7464 16.5 64.7464C11.3 64.7464 7.25 62.9964 4.35 59.4964C1.45 55.9964 0 50.9464 0 44.3464C0 40.1464 0.349999 35.7964 1.05 31.2964C1.75 26.7964 3.15 22.2464 5.25 17.6464C7.35 13.0464 10.1 8.64643 13.5 4.44643ZM63.3 4.44643C65.3 1.84643 67.35 0.396429 69.45 0.0964285C71.55 -0.203572 73.35 0.196429 74.85 1.29643C76.35 2.39643 77.2 4.04643 77.4 6.24643C77.6 8.44643 76.7 10.8464 74.7 13.4464C71.5 17.6464 69.25 21.8964 67.95 26.1964C66.65 30.4964 66 34.4464 66 38.0464L65.1 32.0464C70.3 32.0464 74.5 33.4964 77.7 36.3964C80.9 39.2964 82.5 43.2464 82.5 48.2464C82.5 53.0464 81 56.9964 78 60.0964C75 63.1964 71.1 64.7464 66.3 64.7464C61.1 64.7464 57.05 62.9964 54.15 59.4964C51.25 55.9964 49.8 50.9464 49.8 44.3464C49.8 40.1464 50.15 35.7964 50.85 31.2964C51.55 26.7964 52.95 22.2464 55.05 17.6464C57.15 13.0464 59.9 8.64643 63.3 4.44643Z" fill="black"/>
      </svg>
      <p class="block-2-text">Library предоставляет своим пользователям знания и навыки, пространство для
        обучения, общения и отдыха. Это библиотека новой эры, место, открытое для всех</p>
    </div>
    <div class="block-3 white">
      <div class="block-3-section img-1">
        <div class="section-1">
          <h3 class="section-main-text color-art color-backdrop">Искусство</h3>
          <h4 class="section-text">В дополнение к плавной архитектуре, посетители могут полюбоваться
            произведениями современного искусства. Приходите посмотреть на увлекательные
            произведения в Library!</h4>
          <router-link class="block-button btn-block-3" to="/art">подробнее</router-link>
        </div>
      </div>
      <div class="block-3-section img-2">
        <div class="section-1">
          <h3 class="section-main-text color-arch color-backdrop">Архитектура</h3>
          <h4 class="section-text">Library - это поразительное здание с его стеклянными и стальными конструкциями
            и деревянным фасадом, в его дизайне сочетаются традиционные и современные вкусы</h4>
          <router-link class="block-button btn-block-3" to="/architecture">подробнее</router-link>
        </div>
      </div>
      <div class="block-3-section img-3">
        <div class="section-1">
          <h3 class="section-main-text color-serv color-backdrop">Услуги</h3>
          <h4 class="section-text">Library - это не просто библиотека. Это место для развлечений
            и досуга, место для встреч и конечно чтения. Посмотрите что Library может вам предложить</h4>
          <router-link class="block-button btn-block-3" to="/services">подробнее</router-link>
        </div>
      </div>
    </div>
    <div class="mobile-block-3 white">
      <div class="container">
        <h3 class="mobile-section-main-text color-arch color-backdrop">Архитектура</h3>
        <div class="mobile-block img-1"></div>
        <h4 class="mobile-section-text">Library - это поразительное здание с его стеклянными и
          стальными конструкциями и деревянным фасадом, в его дизайне сочетаются традиционные и современные вкусы</h4>
        <div class="btn-cont">
          <router-link class="block-button btn-mobile-block-3" to="/architecture">подробнее</router-link>
        </div>
      </div>
      <div class="container">
        <h3 class="mobile-section-main-text color-art color-backdrop">Искусство</h3>
        <div class="mobile-block img-2"></div>
        <h4 class="mobile-section-text">В дополнение к плавной архитектуре, посетители могут полюбоваться
          произведениями современного искусства. Приходите посмотреть на увлекательные произведения в Library!</h4>
        <div class="btn-cont">
          <router-link class="block-button btn-mobile-block-3" to="/art">подробнее</router-link>
        </div>
      </div>
      <div class="container">
        <h3 class="mobile-section-main-text color-serv color-backdrop">Услуги</h3>
        <div class="mobile-block img-3"></div>
        <h4 class="mobile-section-text">Library - это не просто библиотека. Это место для развлечений и досуга,
          место для встреч и конечно чтения. Посмотрите что Library может вам предложить</h4>
        <div class="btn-cont">
          <router-link class="block-button btn-mobile-block-3" to="/services">подробнее</router-link>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from "@/UI/footer.vue";

export default {
  name: "main",
  components: {MyFooter}
}
</script>

<style scoped>
.main {
  background-color: white;
}
.block-1 {
  width: 100%;
  height: 120vh;
  background-image: url("/images/library2.webp");
  background-size: cover;
}
.block-1-text {
  position: absolute;
  top: 45%;
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 65px;
  color: #F5F5F5;
  margin-right: 15px;
  margin-left: 50px;
  border: 1px solid rgba(0, 0, 0, 0.03);
}
.block-2 {
  width: 100%;
  height: 700px;
}
.kav {
  width: 72px;
  margin: 150px auto 50px;
  display: block;
}
.block-2-text {
  width: 900px;
  margin: auto;
  text-align: center;
  font-size: 48px;
  font-weight: lighter;
  font-family: "Segoe UI", sans-serif;
}


/* общие элементы */


.img-1 {
  background-image: url("/images/ooditwilight.webp");
}
.img-2 {
  background-image: url("/images/HAM_Kajsa_JoakimSederholm_2000_esillepano.webp");
}
.img-3 {
  background-image: url("/images/architectureoodi.webp");
}
.block-button{
  text-decoration: none;
  height: 30px;
  position: relative;
  border-radius: 17px;
  background-color: rgba(255, 255, 255, 0);;
  color: #000000;
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  padding-top: 8px;
  padding-left: 20px;
  padding-right: 20px;
  border: 3px solid #000000;
  transition: background-color 350ms ease-in-out,color 350ms ease-in-out;
  z-index: 1;
  font-weight: bold;
  font-family: Nunito, sans-serif;
}
.block-button:hover {
  background-color: rgb(30, 30, 30);
  color: #ffffff;
  border: 3px solid #1d1d1f;
  transition: background-color 350ms ease-in-out,color 350ms ease-in-out;
}
.color-backdrop {
  color: transparent;
  -webkit-background-clip: text;
}
.color-arch{
  background-image: linear-gradient(to right, #ff6300, #0048ff);
}
.color-art{
  background-image: linear-gradient(to right, #465cec, #84ab26);
}
.color-serv{
  background-image: linear-gradient(to right, #d2ab93, #d77d09);
}


/* блок 3 для больших экранов */


.block-3 {
  width: 100%;
}
.block-3-section {
  width: 1200px;
  height: 700px;

  border-radius: 25px;
  background-size: cover;
  margin: 150px auto 130px;
}
.block-3-section-2 {
  width: 1200px;
  margin: 0 auto;
  height: 700px;

  border-radius: 25px;
  background-size: cover;
}
.block-3-section-3 {
  width: 1200px;
  height: 700px;
  border-radius: 25px;
  background-size: cover;
  margin: 130px auto 150px;
}
.section-1 {
  position: relative;
  margin-left: 100px;
  width: 600px;
  height: 430px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.82);
  border-radius: 25px;
  top: 150px;
}
.section-main-text {
  top: 25px;
  position: relative;
  text-align: center;
  color: transparent;
  font-family: "Nunito", sans-serif;
  font-size: 56px;
}
.section-text {
  width: 500px;
  text-align: center;
  font-size: 28px;
  font-family: Nunito, sans-serif;
  line-height: 1.3;
  letter-spacing: -0.5px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  height: 200px;
  left: 0;
  right: 0;
}
.btn-block-3 {
  margin-right: 15px;
  margin-top: 45px;
  float: right;
}



/* блок 3 для смартфонов */



.mobile-block-3 {                               /* общий контейнер */
  display: none;
}
.container {                                    /* личный контейнер каждого блока */
  width: 100%;
  height: 550px;
}
.mobile-block {                                 /* блок с фото */
  width: 320px;
  height: 200px;
  border-radius: 25px;
  background-size: cover;
  margin: 25px auto;
}
.mobile-section-main-text {                     /* заглавный текст */
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 55px;
  text-align: center;
}
.mobile-section-text {
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #000000;
  width: 300px;
  margin: 0 auto;
}
.btn-cont {
  width: 150px;
  height: 50px;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
}
.btn-mobile-block-3 {
  border-radius: 30px;
  width: 120px;
  height: 35px;
  padding: 6px 19px 7px;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  color: #1E1E1E;
  margin-left: 15px;
}
@media only screen and (max-width: 734px) {
  .block-1 {
    background-position: center;
  }
  .block-1-text {
    font-size: 44px;
    min-width: 320px;
    width: 270px;
    left: 10px;
    top: 354px;
    margin-left: 15px;
  }
  .block-2 {
    height: 700px;
  }
  .kav {
    margin-top: 75px;
    width: 48px;
  }
  .block-2-text {
    font-size: 32px;
    width: 300px;
    font-family: "Segoe UI Light", sans-serif;
  }
  .block-3 {
    display: none;
  }
  .mobile-block-3 {
    display: block;
  }
}
</style>