<template>
  <div>
    <div class="frame">
      <app-nasaDay></app-nasaDay>
    </div><!--frame-->
     <app-footer></app-footer>
  </div>
</template>

<script>
import nasaDay from '../components/nasaDay'
import footer from '../components/footer'

export default {
  name: 'App',
  components: {
    'app-nasaDay' : nasaDay,
    'app-footer' : footer,
  },
  data: () => ({
    //
  })
}
</script>

<style scoped>
.frame{
  padding: 2%;
 background:#000 url(../assets/images/stars.png) repeat top center;
}
</style>