<template>
  <div>
    <div class="frame">
      <app-favorite></app-favorite>
    </div><!--frame-->
    <app-footer></app-footer>
  </div>
</template>

<script>
import footer from '../components/footer'
import favoriteData from '../components/favoriteData.vue'



export default {
    name: 'App',
  components: {
    'app-favorite': favoriteData,
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
  height: 100%;
}
</style>
