<<template>
  
</template>

        

<script>
import axios from 'axios'
export default {
   computed:{
       userDate(){
           return this.$store.getters.userDate
       },
       userName(){
           return this.$store.getter.userName
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
   }
}
</script>

<style scoped>

</style>
