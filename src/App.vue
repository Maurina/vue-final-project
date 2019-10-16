<template>
  <v-app>
   <div>
     <app-header></app-header>

     <app-footer></app-footer>
   </div>
  </v-app>
</template>

<script>

import header from './components/header'
import footer from './components/footer'

export default {
  name: 'App',
  components: {
    'app-header' : header,
    'app-footer' : footer,
  },
  data: () => ({
    //
  })
}
</script>
