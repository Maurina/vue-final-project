<template>
  <div class="about">
         <app-header></app-header>
             <div class="frame">
              <app-nasaDay></app-nasaDay>
             
            </div><!--frame-->
     <app-footer></app-footer>
  </div>
</template>

<script>
import header from '../components/header'
import nasaDay from '../components/nasaDay'

import footer from '../components/footer'

export default {
  name: 'App',
  components: {
    'app-header' : header,
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
}
</style>