<template>
    <v-container>
       
        <!--<v-btn >Date Created</v-btn> -->
     <v-row>
       <v-col col="3" v-for="nasaDataSet in nasaDataSets" v-bind:key="nasaDataSet.dateCreated">
       
         <v-card class="mx-auto card" max-width="300" outlinded :elevation="14" >
           <div class="spacing"></div>
            <v-img class="image" v-bind:src="`./assets/images/${nasaDataSet.image}`"> </v-img>
            
              <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="textStyle">{{ nasaDataSet.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
           
                <v-card-text> {{ nasaDataSet.description }} </v-card-text>
                <v-card-subtitle>   Date created: {{ nasaDataSet.dateCreated }} </v-card-subtitle>
                <v-card-actions>
                  <v-btn  color="black white--text"   type="submit"
                > Add to favorites </v-btn>
                </v-card-actions>
              
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
           
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
.spacing{
  height: 1.5px;
}
.textStyle{
  font-weight: bold;
  font-size: 1.3rem;
}
</style>