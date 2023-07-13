<template>
  <div class="home-container w-100 h-100 d-flex align-center justify-center">
    <div class="intro">Web Developer 황보수진의 Portfolio 입니다.

      <span id="typed" style="white-space:pre;" class="typed" />
    </div>
  </div>
</template>

<script setup>

import { onMounted } from 'vue'


onMounted(()=> {
  console.log('home mounted')
  //   $("#typed").typed({
  //   strings: ["Hello world."],
  //   typeSpeed: 100,
  //   startDelay: 0,
  //   backSpeed: 0,
  //   backDelay: 2000,
  //   loop: false,
  //   cursorChar: "|",
  //   contentType: 'html'
  // });
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Work+Sans')

@keyframes blink
  0% 
    opacity: 1
  50% 
    opacity: 0
  100% 
    opacity: 1

.home-container
  background-color: #515151
  &:before
    content:""
    background-image: url("../assets/developer_image.jpeg")
    background-repeat: no-repeat
    background-size: cover
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    opacity: 0.3
  .intro
    font-size: 30px
    font-weight: 500
    color: white
    letter-spacing: 2px

    .type-wrap
      font-size: 50px
      padding: 20px

    .typed-cursor
      opacity: 1
      -webkit-animation: blink 0.7s infinite
      -moz-animation: blink 0.7s infinite
      animation: blink 0.7s infinite
</style>

