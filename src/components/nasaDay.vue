<template>
<div>
    <v-content>
        <!-- 2019-09-18_3790 -->
        <h1> Nasa's Image of the day </h1>
        <h2> {{ title }} </h2>
        <img src="https://apod.nasa.gov/apod/image/1910/Barnard150Seahorse1024.jpg" alt="Image of the Day">
        <h3> {{ date }} </h3>
        <p> {{ text }} </p>
    </v-content>    

</div>   
</template>

<script>
import axios from 'axios'
export default {
    data: () =>{
        return{
                title: response.title,
                picture: response.url,
                date: response.date,
                text: response.explanation,
            
        }
    },
    methods: {
        getData() {
            return axios.get('https://api.nasa.gov/planetary/apod?api_key=2XbWea3D9xnTDa8rar9X7j3VfBHCllFBeL8HcbCE').then
            (response =>{
                console.log(response)
            }).catch(error => console.log(error))
        }
    }
}
</script>

<style scoped>

</style>