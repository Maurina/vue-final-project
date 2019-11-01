<template>
  <div class="home">
         <app-header></app-header>
        
          <div class="frame">
              <h1> Data </h1>
          </div><!--frame-->
      


     <app-footer></app-footer>
  </div>
</template>

<script>
import header from '../components/header'
import quote from '../components/quote'
import nasaData  from '../components/nasaData'
import footer from '../components/footer'



export default {
  name: 'App',
  components: {
    'app-header' : header,
    'app-nasaData' : nasaData,
    'app-footer' : footer,
   
  },
  data: () => {
    return{
      date: ''
    }
  }
 
}
</script>

<style scoped>
h1{color: white;}
.frame{
  padding: 2%;
    background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
}





</style>
