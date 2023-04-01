<script setup>

import AppButton from "@/components/UI/buttons/app-button.vue";
</script>

<template>
  <div class="main">
    <div class="main-head">
      <h1 class="head-title fz-72 white">Welcome to the<br>Library</h1>
      <img class="head-image" src="@/assets/images/library2-max.webp" alt="library image">
    </div>
    <div class="main-body">
      <div class="body-description">
        <svg class="description-img" width="83" height="65" viewBox="0 0 83 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 4.44643C15.5 1.84643 17.55 0.396429 19.65 0.0964285C21.75 -0.203572 23.55 0.196429 25.05 1.29643C26.55 2.39643 27.4 4.04643 27.6 6.24643C27.8 8.44643 26.9 10.8464 24.9 13.4464C21.7 17.6464 19.45 21.8964 18.15 26.1964C16.85 30.4964 16.2 34.4464 16.2 38.0464L15.3 32.0464C20.5 32.0464 24.7 33.4964 27.9 36.3964C31.1 39.2964 32.7 43.2464 32.7 48.2464C32.7 53.0464 31.2 56.9964 28.2 60.0964C25.2 63.1964 21.3 64.7464 16.5 64.7464C11.3 64.7464 7.25 62.9964 4.35 59.4964C1.45 55.9964 0 50.9464 0 44.3464C0 40.1464 0.349999 35.7964 1.05 31.2964C1.75 26.7964 3.15 22.2464 5.25 17.6464C7.35 13.0464 10.1 8.64643 13.5 4.44643ZM63.3 4.44643C65.3 1.84643 67.35 0.396429 69.45 0.0964285C71.55 -0.203572 73.35 0.196429 74.85 1.29643C76.35 2.39643 77.2 4.04643 77.4 6.24643C77.6 8.44643 76.7 10.8464 74.7 13.4464C71.5 17.6464 69.25 21.8964 67.95 26.1964C66.65 30.4964 66 34.4464 66 38.0464L65.1 32.0464C70.3 32.0464 74.5 33.4964 77.7 36.3964C80.9 39.2964 82.5 43.2464 82.5 48.2464C82.5 53.0464 81 56.9964 78 60.0964C75 63.1964 71.1 64.7464 66.3 64.7464C61.1 64.7464 57.05 62.9964 54.15 59.4964C51.25 55.9964 49.8 50.9464 49.8 44.3464C49.8 40.1464 50.15 35.7964 50.85 31.2964C51.55 26.7964 52.95 22.2464 55.05 17.6464C57.15 13.0464 59.9 8.64643 63.3 4.44643Z" fill="black"/>
        </svg>
        <p class="description-text fz-36">Library предоставляет своим пользователям знания и навыки, пространство для
          обучения, общения и отдыха.<br>Это библиотека новой эры, место, открытое для всех</p>
      </div>
      <div class="body-sections">
        <div class="body-section">
          <p class="section-title fz-64 color-backdrop color-arch">Архитектура</p>
          <img class="section-img" src="@/assets/images/arch.webp" alt="">
            <p class="section-description fz-24">Library - это поразительное здание с его стеклянными и стальными конструкциями
              и деревянным фасадом, в его дизайне сочетаются традиционные и современные вкусы</p>
          <app-button>
            <router-link to="/architecture">подробнее</router-link>
          </app-button>
        </div>
        <div class="body-section">
          <p class="section-title fz-64 color-backdrop color-art">Искусство</p>
          <img class="section-img" src="@/assets/images/art-oodi-main-max.webp" alt="">
          <p class="section-description fz-24">В дополнение к плавной архитектуре, посетители могут полюбоваться
            произведениями современного искусства. Приходите посмотреть на увлекательные произведения в Library!</p>
          <app-button>
            <router-link to="/art">подробнее</router-link>
          </app-button>
        </div>
        <div class="body-section">
          <p class="section-title fz-64 color-backdrop color-serv">Услуги</p>
          <img class="section-img" src="@/assets/images/architectureoodi-mobile.webp" alt="">
          <p class="section-description fz-24">Library - это не просто библиотека. Это место для развлечений и досуга,
            место для встреч и конечно чтения. Посмотрите что Library может вам предложить</p>
          <app-button>
            <router-link to="/services">подробнее</router-link>
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-head {
  width: 100%;
  height: 120vh;
}
.head-title {
  position: absolute;
  top: 40%;
  left: 5%;
}
.head-image {
  width: 100%;
}
.body-description {
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.description-text {
  width: 70%;
  letter-spacing: -0.5px;
}
.description-img {
  margin: 50px 0;
}
.body-sections {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.body-section {
  margin: 25px 0;
  width: 900px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.section-title {
  margin: 25px 0;
}
.section-img {
  width: 100%;
  border-radius: 35px;
}
.section-description {
  margin: 25px 0 15px 0;
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
@media only screen and (max-width: 734px) {

}
</style>