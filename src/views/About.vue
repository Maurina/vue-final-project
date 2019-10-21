<template>
  <div class="about">
         <app-header></app-header>
     <app-nasaDay></app-nasaDay>
      <app-newsletter></app-newsletter>
     <app-footer></app-footer>
  </div>
</template>

<script>
import header from '../components/header'
import nasaDay from '../components/nasaDay'
import newsletter from '../components/newsletter'
import footer from '../components/footer'

export default {
  name: 'App',
  components: {
    'app-header' : header,
    'app-nasaDay' : nasaDay,
    'app-newsletter' : newsletter,
    'app-footer' : footer,
  },
  data: () => ({
    //
  })
}
</script>