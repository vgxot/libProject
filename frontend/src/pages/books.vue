<template>
  <div class="main-0"></div>
  <form class="search-block">
    <input placeholder="найдётся всё" class="input" type="search" id="search">
    <button id="button" class="button desktop-button">Найти</button>
    <button id="button" type="submit" class="button mobile-button">
      <img class="img-search" src="@/../buttons/search.svg">
    </button>
  </form>
  <div class="books">
  </div>
</template>

<script>
export default {
  name: "search"
}
</script>

<style scoped>
body {
  background-color: #404040;
}
.main-0 {
  height: 60px;
  width: 100%;
}
.top-menu {
  background-color: rgba(0, 0, 0, 0.55);
}
.search-block {
  width: 100%;
  height: 60px;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.input {
  font-family: "Nunito", sans-serif;
  background: #1e1e1e;
  color: white;
  border: 0;
  margin: 15px;
  padding: 5px 14px;
  font-size: 20px;
  border-radius: 2em;
  outline: none;
  height: 60px;
  width: 600px;
  text-indent: 15px;
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
.button {
  width: 110px;
  height: 60px;
  border: 0;
  border-radius: 2em;
  color: #f5f5f5;
  font-size: 20px;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  background-color: #1e1e1e;
  transition: 150ms ease-in;
}
.button:hover {
  transition: 150ms ease-in;
  background-color: #252525;
}

/*            */

.mobile-button {
  display: none;
  width: 60px;
  height: 60px;
  border-radius: 35px;
  background-color: #1e1e1e;
}
.img-search {
  height: 30px;
  filter: invert(1);
  margin: 15px;
}


/* таблица */


.books {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 25px;
}
.book-item {
  display: flex;
  width: 400px;
  padding: 35px;
  background-color: #1e1e1e;
  border-radius: 35px;
  margin: 15px;
}
.book-image {
}
.book-image-img {
  height: 250px;
  margin-right: 25px;
}
.text {
  color: white;
  font-size: 16px;
}
.book-about {
  display: inline-block;
  max-width: 200px;
  float: left;
  line-height: 19px;
}
.book-name {
  font-size: 20px;
  line-height: 100%;
}
.book-author {
  font-size: 18px;
  margin-top: 7px;
}
.rating-block {
  display: flex;
}
.book-rating {
  margin-top: 7px;
  margin-bottom: 7px;
  color: #B3FF66;
  font-size: 19px;
}
.rating-star {
  margin-top: 7px;
  margin-bottom: 7px;
  height: 16px;
  width: 17px;
  margin-left: 5px;
}
.book-pages {

}
.book-year {

}
.book-age {

}



/* конец таблицы */

.mobile-table-db {
  display: none;
}
@media only screen and (max-width: 734px) {
  .top-menu-mobile {
    background-color: rgba(0, 0, 0, 0.55);
  }
  .input{
    width: 265px;
  }
  .button {
    display: none;
  }
  .mobile-button {
    display: block;
  }
  .table-db {
    display: none;
  }
  .mobile-table-db {
    display: block;
  }
  .books {
    grid-template-columns: 1fr;
  }
  .book-item {
    display: flex;
    width: 330px;
    padding: 0;
    margin: 10px auto 25px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 35px;
  }
  .book-image {

  }
  .book-image-img {
    height: 180px;
    margin-right: 25px;
  }
  .text {
    color: white;
    font-size: 13px;
  }
  .book-about {
    display: inline-block;
    float: left;
    line-height: 19px;
  }
  .book-name {
    font-size: 18px;
    line-height: 120%;
  }
  .book-author {
    font-size: 15px;
    margin-top: 7px;
  }
  .book-pages {
    margin-top: 5px;
  }
  .book-year {

  }
  .book-age {

  }
}
</style>