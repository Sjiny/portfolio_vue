<template>
  <div class="menu-bar h-100">
   <ul class="h-100">
    <li v-for="route in router.getRoutes()" :key="route.name" @click="onClick">
      <router-link :to="route.path">{{ route.name }}</router-link>
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
  position: fixed
  ul
    display: flex
    list-style: none
    flex-direction: column
    justify-content: center
    align-items: flex-start
  li
    padding-bottom: 30px
</style>
