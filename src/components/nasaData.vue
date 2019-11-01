<template>
    <v-container>
        <h1>Sort By: </h1>
        <v-btn @click="show = true">Date Created</v-btn>
     <v-row>
       <v-col cols="3" v-for="nasaDataSet in nasaDataSets" v-bind:key="nasaDataSet.dateCreated">
         <v-card v-if="showing">
           <v-card-title>
             <div>
               <h3> {{ nasaDataSet.title }} </h3>
               <p> {{ nasaDataSet.Description}} </p>
             </div>
           </v-card-title>
           <v-card-actions>
             <v-btn @click="show = false">Click</v-btn>
           </v-card-actions>
         </v-card>
       </v-col>
     </v-row>
    </v-container>
</template>

<script>
import { dataMixin } from '../views/dataMixin'

export default {
      data () {
        return{
           show: false,
        }
      },
  mixins: [dataMixin]
}
</script>

<style scoped>

</style>