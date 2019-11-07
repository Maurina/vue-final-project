<template>
  <div>
    <div class="frame">
      <app-quote></app-quote>
    </div><!--frame-->
    <app-footer></app-footer>
  </div>
</template>

<script>

import quote from '../components/quote'
import footer from '../components/footer'



export default {
  name: 'App',
  components: {
  
    'app-quote' : quote,
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
    background:#000 url(../assets/images/stars.png) repeat top center;
}
</style>
