<template>
<div>
    <v-container>
        <v-row>
        <!-- 2019-09-18_3790 -->
            <v-col class="text-center">
                <h1> Nasa's Image of the day </h1>
                <h3>Choose a date from June 16, 1995 to present</h3>
                <p>yyyy-mm-dd format *dashes required</p>
                <v-form v-on:submit.prevent="getResult(date)" class="formDate">
                    <input type="text" v-model="date" :rules="dateRules" required placeholder="yyyy-mm-dd"> 
                    <v-btn type="submit" class="submitBtn" color="black white--text">Get Image</v-btn>
                </v-form>
            </v-col>
            <v-col>
             
                <h2> {{ title }} </h2>
   <div class="card">
                <img v-bind:src="url" />
                <p> {{ explanation }} </p>
                </div>
            </v-col>
        </v-row>
    </v-container>    

</div>   
</template>

<script>
import axios from 'axios'
export default {
    data: () =>{
        return{
            dayPicture: '',
            month: '',
            year: '',
            day: '',
            date: new Date().toISOString().substr(0,10),
            dateRules: [
                v => !!v || 'Dashes are required',
                v => /.+-.+-/.test(v) || 'Dashes mush be used'
            ],
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


input{
    height: 35px;
    margin-right: 13%;
}

h2{
    text-align: center;
}

img {
    width: 100%;
    margin: 2% 0;
  
}

</style>