<template>
    <div>
        <h2> data set </h2>
        <!-- <h1 v-for="nasaDataSet in nasaDataSets" v-bind:key="nasaDataSet.id"> {{ nasaDataSets.dateCreated }} </h1> -->
    </div>
</template>

<script>
import { nasaDataSets } from './nasa.js'
export default {
      data: () =>{
        return{
            nasaDataSets: [
            {dateCreated : ''},
            {title : ''},
            {image : ''},
            {source : ''},
            {description : ''}
            ]
        }
      },
//methods :{ 
   // nasaDataSets.forEach(element => {
  //      this.dateCreated = nasaDataSets.dateCreated
    //})
  

}

</script>

<style scoped>

</style>