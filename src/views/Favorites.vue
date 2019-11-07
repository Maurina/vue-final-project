<template>
    <div class="frame">
        <app-favorites></app-favorites>
       <app-footer></app-footer>
    </div>
</template>

<script>
import footer from '../components/footer'
import favoriteData from '../components/favoriteData.vue'



export default {
  name: 'App',
  components: {
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
