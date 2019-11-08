<template>
<div>
    <v-container>
        <v-row>
            <v-col class="text-center">
                <h1> Nasa's Image of the day </h1>
                <h3>Choose a date from June 16, 1995 to present</h3>
                <v-form v-on:submit.prevent="getResult(date)" class="formDate">
                    <input type="hidden" v-model="date" :rules="dateRules" required placeholder="yyyy-mm-dd" minlength="10" maxlength="10" > 
                    <v-date-picker v-model="date" no-title scrollable ></v-date-picker>
                    <v-btn type="submit" class="submitBtn" color="white black--text" >Get Image</v-btn>
                </v-form>
            </v-col>

            <v-col>
                 
                <v-card class="mx-auto" max-width="400"> 
                       
                    <v-img class="white--text align-end" v-bind:src="url" v-if="show">
                        <v-card-title class="title">{{ title }} </v-card-title>
                    </v-img>
                     
                    <v-card-text class="text--primary"> {{ explanation }} </v-card-text>
                </v-card>
            
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
            show: true,
            dayPicture: '',
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

input[type="text"], textarea {

  background-color : white; 

}
h2{
    text-align: center;
}
img {
    width: 100%;
    margin: auto 0;
   
}

h1, h3 {
    color: white;
    padding-bottom: 2%;
}
.submitBtn{
    margin-left: 2%;
}

</style>

