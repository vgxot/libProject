<script setup>



const data = [
  {id: 0, title: 'Книжный рай', description: 'Книжный рай на третьем этаже - это рай для читателей, где находится большая часть коллекции "Оди". Вы можете отдохнуть на диванах под деревьями, полистать журналы, почитать книги или даже поиграть в настольные игры с друзьями. Летом вы можете любоваться потрясающим видом на парк Тееленлахти и центр города с балкона для граждан. Oodi использует робототехнику, с которой вы можете ознакомиться в Book Heaven, в виде AGV (автоматизированных управляемых транспортных средств), которые суетятся вокруг.'}
]

</script>

<template>
<div class="services">
  <div class="head">
    <p class="head-title-text fs-64">Сервисы Library</p>
    <picture>
      <source media="(max-width: 734px)" srcset="@/assets/images/services3.webp">
      <img class="head-image" src="@/assets/images/services3.webp" alt="">
    </picture>
  </div>
  <div class="content">
    <div v-for="block in data"
         key="block.id">
      <div class="fs-56 bold">{{ block.title }}</div>
      <div class="fs-24">{{ block.description }}</div>

    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@use "@/assets/style/other.scss";
</style>