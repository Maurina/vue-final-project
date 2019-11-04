<template>
        
        <v-container>
        <h1>Favorites </h1>
     <v-row>
       <v-col col="3" v-for="favorite in favorites"  v-bind:key="favorite.dateCreated" :favorite="favorite">
       
         <v-card class="mx-auto" max-width="300" outlinded :elevation="14" >
           <v-card-title> {{ nasaDataSet.title }}  </v-card-title>
            <v-img class="image" v-bind:src="nasaDataSet.image"> </v-img>
              <v-card-actions>
                <v-btn icon @click="show = !show">
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
            <v-expand-transition>
              <div v-if="show">
                <v-card-text> {{ nasaDataSet.description }} </v-card-text>
                <v-card-subtitle>   Date created: {{ nasaDataSet.dateCreated }} </v-card-subtitle>
              </div>
            </v-expand-transition>
         </v-card>
      </v-col>
     </v-row>
    </v-container>
</template>

<script>
import header from '../components/header'
import footer from '../components/footer'



export default {

  data: () => ({
      date: ''
  }),
  computed: {
      favorites() {
          return this.$store.getters.favorites
      }
  }
 
}
</script>

<style scoped>
h1 {
    color: white;
}
</style>