<template>
  <div class="architecture">
    <div class="head">
      <p class="head-title-text fs-64">Архитектура Library</p>
      <picture>
        <source media="(max-width: 734px)" srcset="@/assets/images/oodi-arch-mobile.webp">
        <img class="head-image" src="@/assets/images/oodi-arch-max.webp" alt="">
      </picture>
    </div>
    <div class="content">
      <div class="content-text">
        <p class="content-text-title">Визитная карточка
          <span class="content-text-title-color">Финской </span>архитектуры</p>
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
      <div class="content-logo">
        <img class="content-logo-svg" src="@/assets/buttons/library-mini-logo-white.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "architecture"
}
</script>

<style lang="scss" scoped>
@use "@/assets/style/other.scss";

.content-text-title-color {
  background-image: linear-gradient(to right, #586bcc, #8b60ec);
  color: transparent;
  -webkit-background-clip: text;
  font-weight: bold;
}
.content-logo {
  margin: auto;
}
.content-logo-svg {
  height: 128px;
  margin-right: 50px;
  filter: invert(1);
}
@media only screen and (max-width: 734px) {
  .block-2-text {
    margin: 35px 15px;
    width: 100%;
    text-align: center;
  }
}
</style>
