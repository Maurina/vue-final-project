<<template>
    <div>

      <h1>Welcome :  {{ userName }}  </h1>
      <h1> {{ userDate }} </h1>>        
     <v-row v-if="favoritesList.length">
       <v-col col="3" v-for="(favorite, index) in favoritesList[0][0]" v-bind:key="index">
       
         <v-card class="mx-auto card" max-width="300" outlinded :elevation="14" >
           <div class="spacing"></div>
            <v-img class="image" v-bind:src="`./assets/images/${favorite.image}`" > </v-img>
            
              <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="textStyle" :title="title" >{{ favorite.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
   
                <v-card-text :description="description"> {{ favorite.description }}  </v-card-text>
                <v-card-subtitle :dateCreated="dateCreated">   Date created: {{ favorite.dateCreated }} </v-card-subtitle>
               
   
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </v-card>
      </v-col>
     </v-row>
       
             <div class="spacer"></div>
    </div>
</template>

        

<script>
import axios from 'axios'
export default {
    props: ['favorite'],
   computed:{
        userDate(){
           return this.$store.getters.userDate
       },
       userName(){
           return this.$store.getters.userName
       },
        favoritesList(){
            return this.$store.getters.favoritesList
        }
   },
   data: () =>{
   return{
       show: 'false',
       date: '',
       name: '',
       explanation: '',
       url: '',
       title: '',
       dateCreated:'',
       description:'',
    
    }
   },
}
</script>

<style scoped>
h1{
    color: white;
    text-align: center;
}
h2{
    color: white;
}
.spacer{
    height: 500px;
    width: 100%
}
</style>
