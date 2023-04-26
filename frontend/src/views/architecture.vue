<template>
  <div class="architecture">
    <div class="block-1">
      <p class="block-1-title-text">Архитектура Library</p>
      <picture>
        <source media="(max-width: 734px)" srcset="@/assets/images/oodi-arch-mobile.webp">
        <img class="block-1-image" src="@/assets/images/oodi-arch-max.webp" alt="">
      </picture>
    </div>
    <div class="block-2">
      <div class="block-2-text">
        <p class="block-2-text-title">Визитная карточка
          <span class="block-2-text-title-color">Финской </span>архитектуры</p>
        <p>Здание библиотеки в центре Хельсинки почти полностью состоит из общественных пространств
          и предлагает широкий спектр услуг. Это новый центр впечатляющей сети публичных библиотек города.
          Дизайн делит функции библиотеки на три различных уровня: активный первый этаж, тихий верхний
          этаж и замкнутый промежуточный объем, содержащий более конкретные функции.
          Эта концепция была преобразована в арочную форму, которая предлагает людям использовать
          пространство и услуги под, внутри и сверху. Получившееся в результате здание является
          вдохновляющим и очень функциональным дополнением к городской жизни. Энергоэффективная
          библиотека — впечатляющая и привлекательная визитная карточка финской архитектуры. За
          исключением верхнего этажа, фасад Oodi полностью сделан из дерева, что смягчает общий
          вид архитектуры вокруг залива Тёёлё.<br>Древесина, используемая для внешней стены, - ель.</p>
      </div>
      <div class="block-2-logo">
        <img class="block-2-logo-svg" src="@/assets/buttons/library-mini-logo-white.svg" alt="">
      </div>
    </div>
    <div class="block-3">
    </div>
  </div>
</template>

<script>
export default {
  name: "architecture"
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
  position: absolute;
  text-align: center;
  top: 400px;
  left: 100px;
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
  width: 50%;
  margin: 100px;
  font-size: 24px;
}
.block-2-text-title {
  width: max-content;
  font-size: 42px;
  margin-bottom: 25px;
}
.block-2-text-title-color {
  background-image: linear-gradient(to right, #586bcc, #8b60ec);
  color: transparent;
  -webkit-background-clip: text;
  font-weight: bold;
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
  }
  .block-2-logo {
    display: none;
  }
  .block-2-text {
    margin: 35px 15px;
    width: 100%;
    text-align: center;
  }
  .block-2-text-title {
    font-size: 32px;
    width: 100%;
  }
}
</style>
