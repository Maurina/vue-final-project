<template>
  <v-app>
   <div>
     <app-header></app-header>
   </div>
  </v-app>
</template>

<script>

import header from './components/header'

export default {
  name: 'App',
  components: {
    'app-header' : header
   
  },
  data: () => ({
    //
  })
}
</script>
