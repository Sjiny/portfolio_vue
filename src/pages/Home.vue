<template>
  <div class="home-container w-100 h-100 d-flex align-center justify-center flex-column">
    <div>
      <p class="intro anim-typewriter">Web Developer 황보수진의 Portfolio 입니다.</p>
    </div>
    <div class="pt-2">
    <IntroDialog :dialog="dialog" @dialogClose="(val)=> dialog = val"/>
      <v-btn @click="dialog = true" variant="outlined" color="white"> More</v-btn>
    </div>
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue'
import IntroDialog from '/src/components/IntroDialog'

const dialog = ref(false)


onMounted(()=> {
  console.log('home mounted')
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.home-container
  background-color: #515151
  &:before
    content:""
    background-image: url("../assets/images/developer_image.jpeg")
    background-repeat: no-repeat
    background-size: cover
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    opacity: 0.3
  .intro
    top: 50%
    width: 21.5em
    color: white
    border-right: 2px solid #ffffffbf
    font-size: 30px
    font-weight: 500
    letter-spacing: 2px
    white-space: nowrap
    overflow: hidden
  
  .anim-typewriter
    animation: typewriter 4s steps(44) 2s 1 normal both, blinkTextCursor 1s steps(44) infinite normal
@keyframes typewriter
  from
    width: 0
  to
    width: 21.5em
@keyframes blinkTextCursor
  from
    border-right-color: #ffffffbf
  to
    border-right-color: transparent
</style>

