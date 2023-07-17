<template>
  <div class="about-container h-100 w-100">
   about
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
  background-color: #515151
  opacity: 0.7
</style>
