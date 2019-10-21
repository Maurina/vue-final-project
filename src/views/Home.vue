<template>
  <div class="home">
         <app-header></app-header>
    <h1>Home</h1>

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
