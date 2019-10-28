<template>
<div>
    <v-content>
        <!-- 2019-09-18_3790 -->
        <h1> Nasa's Image of the day </h1>
        <h3>Choose a date from June 16, 1995 to present</h3>
        <p>yyyy-mm-dd format *dashes required</p>
        <v-form v-on:submit.prevent="getResult(date)">
            <input type="text" v-model="date" placeholder="yyyy-mm-dd">
        </v-form>
        <v-card class="card">
        <v-card-title> {{ title }} </v-card-title>
        <img v-bind:src="url" />
        <v-card-text> {{ explanation }} </v-card-text>
        </v-card>
    </v-content>    

</div>   
</template>

<script>
import axios from 'axios'
export default {
    data: () =>{
        return{
            dayPicture: '',
            date:'',
            explanation:'',
            url:'',
            title: ''
            
        }
    },
    methods: {
        getResult(date) {
            return axios.get('https://api.nasa.gov/planetary/apod?api_key=2XbWea3D9xnTDa8rar9X7j3VfBHCllFBeL8HcbCE&date=' + date).then
            (response =>{
                console.log(response.data)
                this.explanation = response.data.explanation
                this.date = response.data.date
                this.url = response.data.url
                this.title = response.data.title
            }).catch(error => console.log(error))
        }
    } 
}
</script>

<style scoped>
.card{
    width: 50%;
}
img {
    width: 100%;
    margin: 10px;
}

</style>