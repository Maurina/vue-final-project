<template>
    <div class="frame">
        <app-header></app-header>
        <app-favorites></app-favorites>
       <app-footer></app-footer>
    </div>
</template>

<script>
import header from '../components/header'
import footer from '../components/footer'
import favoriteData from '../components/favoriteData.vue'



export default {
  name: 'App',
  components: {
    'app-header' : header,
    'app-footer' : footer,
    'app-favorites' : favoriteData
   
  },
  data: () => ({
      date: ''
  }),
 
}
</script>

<style scoped>
.frame{
  padding: 2%;
    background:#000 url(../assets/images/stars.png) repeat top center;
}
</style>
