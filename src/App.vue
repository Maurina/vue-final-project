<template>
  <v-app>
   <div>
     <app-header></app-header>
      <app-newsletter></app-newsletter>
     <app-footer></app-footer>
   </div>
  </v-app>
</template>

<script>

import header from './components/header'
import newsletter from './components/newsletter'
import footer from './components/footer'

export default {
  name: 'App',
  components: {
    'app-header' : header,
    'app-newsletter' : newsletter,
    'app-footer' : footer,
  },
  data: () => ({
    //
  })
}
</script>
