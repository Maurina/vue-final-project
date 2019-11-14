<<template>
<div>
    <v-container>
        <v-row>
          

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
     computed:{
        userDate(){
        return this.$store.getters.userDate
        }
     },
    data: () =>{
        return{
            show: true,
            dayPicture: '',
            date: this.$store.getters.userDate,
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
