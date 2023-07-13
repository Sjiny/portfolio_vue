<template>
    <v-layout class="h-100">
      <MenuBar />
      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <router-view/>
      </v-main>
    </v-layout>
</template>
<script setup>
import MenuBar from '/src/components/MenuBar'


</script>
<style lang="sass">
#app
  height: 100vh
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>
