<template>
  <div class="menu-bar h-100">
   <ul class="h-100">
    <li v-for="route in router.getRoutes()" :key="route.name" @click="onClick">
      <router-link :to="route.path" class="link">
        <div class="d-flex align-center">
          <v-icon :icon="route.meta.icon" />
          <span>{{ route.name }}</span>  
        </div>
      </router-link>
    </li>
   </ul>
   
  </div>
</template>

<script setup>
import  router from '/src/router'
import { onMounted } from 'vue'


onMounted(()=> {
  console.log(router.getRoutes())
})

// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   }
// }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.menu-bar
  margin-left: 10px
  position: fixed
  z-index: 1
  ul
    display: flex
    list-style: none
    flex-direction: column
    justify-content: center
    align-items: flex-start
  li
    height: 80px
    padding-bottom: 30px
    span
      position: absolute
      display: none
      vertical-align: bottom
      font-weight: 700
      transition: ease-out .4s
    div
      background: black
      border-radius: 30px
      transition: all .5s ease-in 0s
    &:hover
      span
        position: relative
        display: block
        text-decoration: none
      div
        padding-right: 20px
      
  a
    color: white
    text-decoration-line: none
    transition: all 0.2s ease 0s
    .v-icon
      height: 50px
      width: 50px
      background: black
      border-radius: 30px
      padding: 0px 20px
    
</style>
