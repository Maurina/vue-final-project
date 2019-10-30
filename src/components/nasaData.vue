<template>
    <div>
      
        <h2> data set </h2>
     
        <p> {{ title }}</p>
  
        <!-- <h1 v-for="nasaDataSet in nasaDataSets" v-bind:key="nasaDataSet.id"> {{ nasaDataSets.dateCreated }} </h1> -->
    </div>
</template>

<script>

export default {
    
      data: () =>{
        return{
           
            dateCreated :'',
            title : '',
            image : '',
            source : '',
            description : ''
        }
      },
//methods :{ 
  //  nasaDataSets,forEach(element => {
    //  this.dateCreated = nasaDataSets.dateCreated

    //} 
    methods: {
    getNasaDataSets(title) {
      return title[title] || ''
  console.log(title)

}
    }
}
</script>

<style scoped>

</style>