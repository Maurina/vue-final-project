<<template>
    <div>
    
    
      <h1>Welcome :  {{ userName }}  </h1>
<
  <v-form v-on:submit.prevent="getResult(userDate)" class="formDate">
                    <input type="hidden" v-model="userDate" minlength="10" maxlength="10" > 
                  
                    <v-btn type="submit" class="submitBtn" color="white black--text" >Favorite Date</v-btn>
                </v-form>
         <v-card class="mx-auto" max-width="400"> 
                       
                    <v-img class="white--text align-end" v-bind:src="url">
                        <v-card-title class="title">{{ title }} </v-card-title>
                    </v-img>
                    <v-card-title> Your favorite date: {{ date }} </v-card-title>
                    <v-card-text class="text--primary"> {{ explanation }} </v-card-text>
                </v-card>
          
       
             <div class="spacer"></div>
    </div>
</template>

        

<script>
import axios from 'axios'
export default {
   computed:{
        userDate(){
           return this.$store.getters.userDate
       },
       userName(){
           return this.$store.getters.userName
       },
        favoriteDate(){
            return this.$store.getters.favoritesList
        }
   },
   data: () =>{
   return{
       date: '',
       name: '',
       explanation: '',
       url: '',
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
                console.log(response)
            }).catch(error => console.log(error))
        }
    } 
}
</script>

<style scoped>
h1{
    color: white;
}
h2{
    color: white;
}
.spacer{
    height: 500px;
}
</style>
