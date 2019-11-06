<template>
    <v-container>
       

        <!--<v-btn >Date Created</v-btn> -->
     <v-row>
       <v-col col="3" v-for="nasaDataSet in nasaDataSets" v-bind:key="nasaDataSet.dateCreated">
       
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
                <v-card-actions>
                  <v-btn  color="black white--text" > Add to favorites </v-btn>
                </v-card-actions>
              </div>
            </v-expand-transition>
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
.image {
    width: 99.5%;
    margin: 0 auto;
   
}

.back{
  background-color: rgba(222,222,222,0.1);
}

</style>