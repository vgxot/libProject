<template>
  <div class="rating-block">
    <div class="title text">Рейтинг</div>
    <div class="flex-rating">
      <div class="star-block"></div>
      <div class="mark-block">
        <div class="mark text">{{five}}</div>
        <div class="mark text">{{four}}</div>
        <div class="mark text">{{three}}</div>
        <div class="mark text">{{two}}</div>
        <div class="mark text">{{one}}</div>
      </div>
    </div>
    <div class="mark-the-book text">Оцените книгу</div>
    <div class="star-mark">
      <div class="rating-star-block">
        <button @click="activeOneStar" class="btn-star-one">
          <div class="rating-star" :class="{ active: oneStar }"></div>
        </button>
        <button @click="activeTwoStar" class="btn-star-one">
          <div class="rating-star" :class="{ active: twoStar }"></div>
        </button>
        <button @click="activeThreeStar" class="btn-star-one">
          <div class="rating-star" :class="{ active: threeStar }"></div>
        </button>
        <button @click="activeFourStar" class="btn-star-one">
          <div class="rating-star" :class="{ active: fourStar }"></div>
        </button>
        <button @click="activeFiveStar" class="btn-star-one">
          <div class="rating-star" :class="{ active: fiveStar }"></div>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    let five = 0
    let four = 0
    let three = 0
    let two = 0
    let one = 0
    return {
      book: [],
      five,
      four,
      three,
      two,
      one,
      fiveStar: false,
      fourStar: false,
      threeStar: false,
      twoStar: false,
      oneStar: false
    }
  },
  async mounted() {
    let url = window.location.pathname
    await axios
        .get(`http://127.0.0.1:3000/api${url}`)
        .then((response) => {
          this.book = response.data[0]
          this.one = this.book.one
          this.two = this.book.two
          this.three = this.book.three
          this.four = this.book.four
          this.five = this.book.five
        })
  },
  methods: {
    markOne() {
      this.one += 1
    },
    activeFiveStar() {
      if (this.oneStar === false) {
        this.fiveStar = true
        this.fourStar = true
        this.threeStar = true
        this.twoStar = true
        this.oneStar = true
      } else {
        this.fiveStar = false
        this.fourStar = false
        this.threeStar = false
        this.twoStar = false
        this.oneStar = false
      }
      if (this.fiveStar === false) {
        this.five += 1
      }
      if (this.fiveStar === true) {
        this.five -= 1
      }
    },
    activeFourStar() {
      if (this.oneStar === false) {
        this.fiveStar = false
        this.fourStar = true
        this.threeStar = true
        this.twoStar = true
        this.oneStar = true
      } else {
        this.fiveStar = false
        this.fourStar = false
        this.threeStar = false
        this.twoStar = false
        this.oneStar = false
      }
      if (this.fourStar === false) {
        this.four += 1
      }
      if (this.fourStar === true) {
        this.four -= 1
      }
    },
    activeThreeStar() {
      if (this.oneStar === false) {
        this.fiveStar = false
        this.fourStar = false
        this.threeStar = true
        this.twoStar = true
        this.oneStar = true
      } else {
        this.fiveStar = false
        this.fourStar = false
        this.threeStar = false
        this.twoStar = false
        this.oneStar = false
      }
      if (this.threeStar === false) {
        this.three += 1
      }
      if (this.threeStar === true) {
        this.three -= 1
      }
    },
    activeTwoStar() {
      if (this.oneStar === false) {
        this.fiveStar = false
        this.fourStar = false
        this.threeStar = false
        this.twoStar = true
        this.oneStar = true
      } else {
        this.fiveStar = false
        this.fourStar = false
        this.threeStar = false
        this.twoStar = false
        this.oneStar = false
      }
      if (this.twoStar === false) {
        this.two += 1
      }
      if (this.twoStar === true) {
        this.two -= 1
      }
    },
    activeOneStar() {
      if (this.oneStar === false) {
        this.fiveStar = false
        this.fourStar = false
        this.threeStar = false
        this.twoStar = false
        this.oneStar = true
      } else {
        this.fiveStar = false
        this.fourStar = false
        this.threeStar = false
        this.twoStar = false
        this.oneStar = false
      }
      if (this.oneStar === false) {
        this.one += 1
      }
      if (this.oneStar === true) {
        this.one -= 1
      }
    }
  },
  name: "rating-block"
}
</script>

<style scoped>
.rating-block {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.50);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  padding: 10px 25px;
  width: max-content;
  height: max-content;
}
.title {
  width: max-content;
  margin: 0 auto;
  font-size: 32px;
}
.flex-rating {
  display: flex;
}
.star-block {
  width: 150px;
  background-color: #1E1E1E;
}
.mark-block {
  float: right;
  width: 150px;
}
.mark {
  margin-top: 3px;
  font-size: 18px;
  text-align: right;
}
.mark-the-book {
  text-align: center;
  font-size: 22px;
}
.rating-star-block {
  width: max-content;
  margin: 0 auto;
}
.btn-star-one {
  cursor: pointer;
}
.rating-star {
  background-image: url("/buttons/starADF.svg");
  width: 21px;
  height: 20px;
  margin: 2px;
}
.rating-star.active {
  background-image: url("/buttons/starADFfill.svg");
}
.rating-star:hover {
  fill: #B3FF66;
}
.text {
  color: white;
}
</style>