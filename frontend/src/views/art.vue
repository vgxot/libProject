<template>
  <div class="art">
    <div class="block-1">
      <p class="block-1-title-text">Искусство в Library</p>
      <picture>
        <source media="(max-width: 734px)" srcset="@/assets/images/art-oodi-main-mobile-max.webp">
        <img class="block-1-image" src="@/assets/images/art-oodi-main-max.webp" alt="">
      </picture>
    </div>
    <div class="block-2">
      <div class="block-2-text">
        <p>Общественные произведения искусства способствуют созданию интересной и красивой городской среды.
          В дополнение к плавной архитектуре, посетители могут полюбоваться произведениями
          современного искусства в Library. Искусство служит не только украшением, поскольку произведения
          искусства также могут заставить шестеренки в вашей голове вращаться. Смысл искусства живет в диалоге
          с окружающей средой и аудиторией. Приходите посмотреть на увлекательные произведения искусства в Library!</p>
      </div>
      <div class="block-2-logo">
        <img class="block-2-logo-svg" src="@/assets/buttons/library-mini-logo-white.svg" alt="">
      </div>
    </div>
    <div class="block-3">
      <div class="art-object">
        <div class="art-object-info">
          <div class="art-title">Dedication (посвящение)</div>
          <div class="art-author">Otto Karvonen</div>
          <div class="art-year">2018</div>
          <div class="art-object-photo-block-mobile">
            <img class="art-object-photo" src="@/assets/images/oodi-stairs-2.webp" alt="">
          </div>
          <div class="art-description">Работа Отто Карвонена - это посвящение посетителям библиотеки и тем,
            кто не часто посещает библиотеку. В статье представлены пожертвования, собранные в рамках
            общественной кампании, в ходе которой любой желающий мог предложить, кому должна быть посвящена
            библиотека. Это произведение напоминает нам о том, что библиотека действительно принадлежит всем,
            независимо от происхождения, возраста, благосостояния или любого другого фактора.
            Библиотека стремится к тому, чтобы основные права человека, такие как право на доступ
            к информации и свободу слова, применялись в равной степени ко всем. Слова, нарисованные
            на общественной лестнице Ооди, были выбраны группой, собранной художником. Порядок слов
            был сгенерирован случайным образом, и произведение не предназначено для чтения в
            каком-либо определенном направлении. Между словами, близкими друг к другу, могут
            образовываться различные связи и параллели, но это зависит от зрителя.
          </div>
        </div>
        <div class="art-object-photo-block">
          <img class="art-object-photo" src="@/assets/images/oodi-stairs-2.webp" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "art"
}
</script>

<style scoped>
.block-1 {
  height: 500px;
}
.block-1-title-text {
  color: white;
  font-size: 64px;
  vertical-align: middle;
  left: 0;
  position: absolute;
  text-align: center;
  top: 230px;
  width: 50%;
}
.block-1-image {
  width: 100%;
  height: 100%;
  background-size: contain;
  object-fit: cover
}
.block-2 {
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.block-2-text {
  width: 51%;
  margin: 100px;
  font-size: 24px;
}
.block-2-logo {
  margin: auto;
}
.block-2-logo-svg {
  height: 128px;
  margin-right: 50px;
  filter: invert(1);
}
.block-3 {
  background-color: white;
}
.art-object {
  margin: 0 100px;
  display: flex;
}
.art-object-info {
  margin-right: 100px;
  width: 75%;
  color: black;
}
.art-title {
  font-size: 36px;
}
.art-author {
  font-size: 30px;
}
.art-year {
  font-size: 28px;
}
.art-description {
  font-size: 20px;
}
.art-object-photo-block {
  width: 100%;
}
.art-object-photo-block-mobile {
  display: none;
  width: 100%;
}
.art-object-photo {
  background-size: cover;
  width: 100%;
  float: right;
}
@media only screen and (max-width: 734px) {
  .block-1 {
    height: 600px;
  }
  .block-1-title-text {
    font-size: 42px;
    position: absolute;
    left: 25px;
    right: 0;
    text-align: left;
    top: 290px;
    line-height: 1.15;
    backdrop-filter: blur(10px);
    padding: 20px 35px;
    border-radius: 25px;
  }
  .block-2-logo {
    display: none;
  }
  .block-2-text {
    margin: 35px 15px;
    width: 100%;
    text-align: center;
  }
  .block-3 {
    text-align: center;
  }
  .art-object {
    margin: 0 25px;
    display: block;
  }
  .art-object-info {
    margin-right: 0;
    width: 100%;
    color: black;
  }
  .art-title {
    font-size: 42px;
    line-height: 1.15;
    margin-bottom: 5px;
  }
  .art-author {
    font-size: 28px;
  }
  .art-year {
    font-size: 28px;
  }
  .art-object-photo-block {
    display: none;
  }
  .art-object-photo-block-mobile {
    display: block;
  }
  .art-object-photo {
    margin: 25px 0;
  }
}
</style>