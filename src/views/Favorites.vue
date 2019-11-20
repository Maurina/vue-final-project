<template>
  <div>
    <div class="frame">
      <app-favoriteData></app-favoriteData>
    </div><!--frame-->
    <app-footer></app-footer>
  </div>
</template>

<script>
import footer from '../components/footer'
import favoriteData from '../components/favoriteData'



export default {
    name: 'App',
  components: {
    'app-favoriteData': favoriteData,
    'app-footer' : footer,
   
  },
data: () => ({
    date: ""
 
})
}
</script>

<style scoped>
.frame{
  padding: 2%;
  background:#000 url(../assets/images/stars.png) repeat top center;
}
</style>
