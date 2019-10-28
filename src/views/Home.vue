<template>
  <div class="home">
         <app-header></app-header>
        
          <div class="frame">
            <h1>Home</h1>
  
          </div><!--frame-->
     <app-footer></app-footer>
  </div>
</template>

<script>
import header from '../components/header'
import nasaDay from '../components/nasaDay'
import footer from '../components/footer'

import { nasaDatas } from '../components/nasa.json'


export default {
  name: 'App',
  components: {
    'app-header' : header,
    'app-nasaDay' : nasaDay,
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
