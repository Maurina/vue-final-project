<template>
  <v-app>
   <div>
    <router-view></router-view>
   </div>
  </v-app>
</template>

<script>

import header from './components/header'
import nasaDay from './components/nasaDay'
import newsletter from './components/newsletter'
import footer from './components/footer'

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
