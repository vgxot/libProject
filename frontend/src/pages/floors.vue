<template>
  <div class="floors">
    <div class="block-1">
      <div class="block-1-section-1">Этажи Library</div>
      <div class="block-1-section-2">
        <p class="block-1-section-2-text-2">
          Каждый этаж в Library имеет свой собственный характер, основанный на возможностях,
          которые он предлагает.<br> В Library есть место как для тихих, так и для более шумных мероприятий.
        </p></div>
    </div>
    <div class="block-2">
      <div class="floors-block-text-1">
        <p class="floors-text-1">1 этаж</p>
      </div>
      <div class="floors-block-text-2">
        <p class="floors-text-2">Мероприятия, кафе и встречи</p>
      </div>
      <div class="floors-block-text-3">
        <p class="floors-text-3">Активные общественные объекты и большие места для проведения мероприятий,
          такие как кинотеатр и многофункциональный зал, расположены на первом этаже.
          Оживленный вестибюль образует этаж transition and partners, а также содержит быстрые библиотечные услуги:
          здесь вы можете вернуть вещи, которые вы позаимствовали, и взять последние книги.</p>
      </div>
      <div class="floors-img floor-1"></div>
      <div class="floors-block-text-1">
        <p class="floors-text-1">2 этаж</p>
      </div>
      <div class="floors-block-text-2">
        <p class="floors-text-2">Семинары, обучение и взаимодействие</p>
      </div>
      <div class="floors-block-text-3">
        <p class="floors-text-3">Второй этаж отведен для работы, обучения на практике,
          взаимодействия и совместного времяпрепровождения с другими людьми, здесь есть студии,
          игровые комнаты, городские мастерские, рабочие и конференц-залы, а также помещения для групповой работы.</p>
      </div>
      <div class="floors-img floor-2"></div>
      <div class="floors-block-text-1">
        <p class="floors-text-1">3 этаж</p>
      </div>
      <div class="floors-block-text-2">
        <p class="floors-text-2">Отдых, красота</p>
      </div>
      <div class="floors-block-text-3">
        <p class="floors-text-3">Верхний этаж - это место, где можно расслабиться и отдохнуть.
          Под волнистым потолком вы можете отдохнуть от повседневных дел, выпить кофе
          и полюбоваться видом с балкона для граждан. Этот этаж больше всего напоминает
          традиционную библиотеку. Здесь же находится и детская секция.</p>
      </div>
      <div class="floors-img floor-3"></div>
    </div>
    <div class="block-3"></div>
  </div>
</template>

<script>
export default {
  name: "floors"
}
</script>

<style scoped>
.floors {
  background-color: white;
}
.block-1 {                          /* титульный блок */
  padding-top: 75px;
  width: 100%;
  height: 300px;
}
.block-1-section-1 {                          /* первая секция первого блока */
  width: 100%;
  height: 130px;
  font-size: 64px;
  text-align: center;
}
.block-1-section-2 {                          /* вторая секция первого блока */
  max-width: 1200px;
  height: 170px;
  font-size: 24px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
.block-1-section-2-text-2 {                          /* регулирует ширину описания */
  max-width: 660px;
}
.block-2 {

}
.floors-block-text-1 {                          /* блоки для текста о этажах */
  max-width: 1200px;
  margin: 50px auto 20px;
}
.floors-block-text-2 {
  max-width: 1200px;
  margin: auto auto 20px;
}
.floors-block-text-3 {
  max-width: 1200px;
  margin: auto auto 50px;
}
.floors-text-1 {                          /* номер этажа */
  margin: 0 auto;
  font-size: 48px;
}
.floors-text-2 {                          /* оглавление этажа */
  font-size: 36px;
  max-width: 900px;
}
.floors-text-3 {                          /* описание этажа */
  font-size: 22px;
  max-width: 900px;
}
.floors-img {                               /* схема этажа */
  max-width: 1300px;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
}
.floor-1 {                                                  /* отдельно источник картинки */
  background-image: url("/images/floor-1-.webp");
  height: 1000px;
  object-fit: cover;
  background-size: cover;
}
.floor-2 {
  background-image: url("/images/floor-2-.webp");
  height: 1000px;
  object-fit: cover;
  background-size: cover;
}
.floor-3 {
  background-image: url("/images/floor-3-.webp");
  height:1000px;
  object-fit: cover;
  background-size: cover;
}
.block-3 {                               /* заглушка */
  width: 100%;
  height: 100px;
}
</style>