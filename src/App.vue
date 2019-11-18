<template>
  <v-app>
   <div>
    <app-header></app-header>

    <router-view></router-view>
   </div>
  </v-app>
</template>

<script>
import header from './components/header'



export default {
  components: {
    'app-header' : header,
   
  },
  data: () => ({
    //
  })
}
</script>

<style scoped>


</style>