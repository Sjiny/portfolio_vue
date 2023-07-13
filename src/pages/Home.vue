<template>
  <div class="home-container w-100 h-100" >
  </div>
</template>

<script setup>

import { onMounted } from 'vue'


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
    background-image: url("../assets/developer_image.jpeg")
    background-repeat: no-repeat
    background-size: cover
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    opacity: 0.3
</style>
