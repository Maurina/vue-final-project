<template>
  <div>
    <div class="frame">
      <h1>Welcome</h1>
      <h2>  {{ userName }} </h2>
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
  }),
  computed:{
    userName(){
      return this.$store.getters.userName
    }
  }
}
</script>

<style scoped>
.frame{
  padding: 2%;
    background:#000 url(../assets/images/stars.png) repeat top center;
}
h2, h1{
  color: white;
  text-align: center;
}
h2{
    padding-bottom: 2%;
}
</style>
