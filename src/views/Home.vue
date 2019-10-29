<template>
  <div class="home">
         <app-header></app-header>
        
          <div class="frame">
            <h1>Home</h1>
            <app-nasaData></app-nasaData>
          </div><!--frame-->
     <app-footer></app-footer>
  </div>
</template>

<script>
import header from '../components/header'

import nasaData  from '../components/nasaData'
import footer from '../components/footer'



export default {
  name: 'App',
  components: {
    'app-header' : header,
    'app-nasaData' : nasaData,
    'app-footer' : footer,
   
  },
  data: () => ({
      date: ''
  })
 
}
</script>

<style scoped>
.frame{
  padding: 2%;
}
</style>
