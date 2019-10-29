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
                    <v-btn type="submit" class="submitBtn" color="black white--text" >Get Image</v-btn>
                </v-form>
            </v-col>
            <v-col>
             
       
            <v-card class="mx-auto" max-width="400"> 
                 <transition name="fade">
                    <v-img 
                        class="white--text align-end"
                        height="200px"
                        v-bind:src="url"
                        v-if="show"
                        >
               
                     <v-card-title>{{ title }} </v-card-title>
                    </v-img>
                 </transition>
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
    margin: auto 0;
   
}

/* animation */
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: opacity 2s;
}
.fade-leave{
    opacity: 1;
}
.fade-leave-active{
  transition: opacity 2s;
  opacity: 0;
}
</style>

