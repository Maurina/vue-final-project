<<template>
  <div>
      <h1>Welcome :  {{ userName }}  </h1>

      <h2> {{ userDate }} </h2>

      <h2> {{ favoriteList }} </h2>

      <div class="spacer"></div>
    </div>
</template>

        

<script>

export default {
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
