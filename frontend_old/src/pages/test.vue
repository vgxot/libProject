<template>
  <div class="block-0">
    <div class="block-1">Оценки:</div>
    <button class="buuton-rating" v-on:click="addRating" >5</button>
    <button class="buuton-rating">4</button>
    <button class="buuton-rating">3</button>
    <button class="buuton-rating">2</button>
    <button class="buuton-rating">1</button>

    <div>5: {{five}}</div>
    <div>4: {{four}}</div>
    <div>3: {{three}}</div>
    <div>2: {{two}}</div>
    <div>1: {{one}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      five: 15352,
      four: 5055,
      three: 1231,
      two: 150,
      one: 783
    }
  },
  methods: {
    addRating() {
      this.five += 1
    }
  },
  name: "test"
}
</script>

<style scoped>
.block-0 {

}
.block-1 {
  padding-top: 75px;
}
.buuton-rating {
  text-decoration: none;
  height: 30px;
  position: relative;
  border-radius: 17px;
  background-color: rgba(255, 255, 255, 0);;
  color: #000000;
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  border: 3px solid #000000;
  transition: background-color 350ms ease-in-out,color 350ms ease-in-out;
  z-index: 1;
  font-weight: bold;
  font-family: Nunito, sans-serif;
}
</style>