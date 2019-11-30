<template>
  <div>
    <div class="frame">
      <app-form></app-form>
    </div><!--frame-->
     <app-footer></app-footer>
  </div>
</template>

<script>
import form from '../components/form'
import footer from '../components/footer'

export default {
  name: 'App',
  components: {
    'app-form' : form,
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
 background:#000 url(/assets/images/stars.png) repeat top center; 
}
</style>