<template>
<div>
    <v-content>
        <!-- 2019-09-18_3790 -->
    </v-content>    

</div>   
</template>

<script>
import axios from 'axios'
export default {
    data: () =>{
        return{
            imageDay
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