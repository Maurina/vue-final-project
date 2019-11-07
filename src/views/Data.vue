<template>
  <div>
    <div class="frame">
      <app-nasaData></app-nasaData>
    </div><!--frame-->
    <app-footer></app-footer>
  </div>
</template>

<script>
import footer from '../components/footer'
import nasaData from '../components/nasaData'



export default {
  name: 'App',
  components: {
    'app-nasaData' : nasaData,
    'app-footer' : footer,
   
  },

}
</script>

<style scoped>
.frame{
 background:#000 url(../assets/images/stars.png) repeat top center;

}

</style>
