<template>
  <div class="about-container h-100 w-100">
    <div class="title-container">
      <h1>ABOUT ME
        <span class="title-bg">SKILLS</span>
      </h1>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'


onMounted(()=> {
  console.log('about mounted')
})

</script>
<style lang="sass" scoped>
.about-container
  background-color: #000000
  opacity: 0.8
  .title-container
    color: white
    position: relative
    padding: 80px
    h1
      font-size: 56px
      font-weight: 900
      .title-bg
        font-size: 110px
        left: 0px
        letter-spacing: 10px
        position: absolute
        right: 0px
        top: 50%
        font-weight: 800
        transform: translateY(-50%)
        opacity: 0.07
        animation: in 1s ease
      
@keyframes in
  0%
    letter-spacing: 60px
  100%
    letter-spacing: 10px
</style>
